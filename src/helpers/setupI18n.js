import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import languageRules from '../constants/languageRules';
import { availableLanguages } from '../apis/getAvailableLanguages';

// https://github.com/isaachinman/next-i18next/issues/562
i18next.languages = availableLanguages;

// this is required for Cordova https://github.com/i18next/i18next-http-backend/issues/23#issuecomment-718929822
const requestWithXmlHttpRequest = (options, url, payload, callback) => {
  try {
    const request = new XMLHttpRequest();
    request.open('GET', url, 1);
    if (!options.crossDomain) {
      request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    }
    request.withCredentials = !!options.withCredentials;
    if (payload) {
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    if (request.overrideMimeType) {
      request.overrideMimeType('application/json');
    }
    let headers = options.customHeaders;
    headers = typeof headers === 'function' ? headers() : headers;
    if (headers) {
      for (const i in headers) {
        request.setRequestHeader(i, headers[i]);
      }
    }
    request.onreadystatechange = () => {
      // in android webview loading a file is status status 0
      request.readyState > 3 && callback(request.status >= 400 ? request.statusText : null, { status: request.status || 200, data: request.responseText });
    };
    request.send(payload);
  } catch (e) {
    console.warn(e);
  }
};
const getLoadPath = (() => {
  for (const meta of  window.parent.document.getElementsByTagName("meta")) {
    if (meta.name === 'i18n') {
      if (meta.content[0] !== '%') {
        return meta.content;
      } else {
        console.warn("language dev mode detected");
        break;
      }
    }
  }

  console.warn("falling back to default language file");
  return './i18n/{{ns}}-{{lng}}.json';
});

export default state => {
  const options = {
    fallbackLng: 'en',
    react: {
      useSuspense: false,
    },
  };
  const callback = (err, t) => {
    window.Annotations.Utilities.setAnnotationSubjectHandler(type =>
      t(`annotation.${type}`),
    );

    window.Core.Tools.SignatureCreateTool.setTextHandler(() =>
      t('message.signHere'),
    );

    window.Core.Tools.FreeTextCreateTool.setTextHandler(() =>
      t('message.insertTextHere'),
    );

    window.Core.Tools.CalloutCreateTool.setTextHandler(() =>
      t('message.insertTextHere'),
    );
  };

  if (state.advanced.disableI18n) {
    i18next.init(options, callback);
  } else {
    i18next.use(HttpApi).init(
      {
        ...options,
        backend: {
          loadPath: getLoadPath(),
          request: requestWithXmlHttpRequest,
        },
      },
      callback,
    );
  }

  // set custom rules. since i18next doesn't support (i.e 'zh-ch', 'zh-tw', or 'pt-br')
  // have to look inside the i18n source code "getRule" function to see what rule we can copy
  Object.keys(languageRules).forEach(lang => {
    if (languageRules[lang].i18next) {
      const rule = i18next.services.pluralResolver.getRule(languageRules[lang].i18next);
      i18next.services.pluralResolver.addRule(lang, rule);
    }
  });
};
