import React from 'react';
import DataElementWrapper from '../DataElementWrapper';
import RedactionSearchMultiSelect from './RedactionSearchMultiSelect';
import { redactionTypeMap } from 'constants/redactionTypes';
import './RedactionSearchOverlay.scss';
import { useTranslation } from 'react-i18next';

const buildSearchOptions = (searchTerms) => {
  const options = {
    textSearch: [],
    caseSensitive: true,
  };

  if (!searchTerms) {
    return options;
  }

  searchTerms.forEach((searchTerm) => {
    const { type } = searchTerm;
    if (type === redactionTypeMap['TEXT']) {
      options.textSearch.push(searchTerm.label);
    } else {
      options[type] = true;
    }
    if (searchTerm.regex) {
      options.caseSensitive = options.caseSensitive && !searchTerm.regex.ignoreCase;
    }
  });

  return options;
};

const RedactionSearchOverlay = (props) => {
  const {
    setIsRedactionSearchActive,
    searchTerms,
    setSearchTerms,
    executeRedactionSearch,
    activeTheme,
    redactionSearchOptions,
  } = props;
  const [t] = useTranslation();

  const translatedOptions = redactionSearchOptions.map((option) => ({
    ...option,
    label: t(option.label),
  }));

  const handleChange = (updatedSearchTerms) => {
    setSearchTerms(updatedSearchTerms);
    const options = buildSearchOptions(updatedSearchTerms);
    executeRedactionSearch(options);
  };

  const handleCreate = (newValue) => {
    const textTerm = {
      label: newValue,
      value: newValue,
      type: redactionTypeMap['TEXT']
    };
    // Initially search terms are null so we safeguard against this
    const nonNullSearchTerms = searchTerms || [];
    const updatedSearchTerms = [...nonNullSearchTerms, textTerm];
    setSearchTerms(updatedSearchTerms);
    const options = buildSearchOptions(updatedSearchTerms);
    options.caseSensitive = false;
    executeRedactionSearch(options);
  };

  return (
    <DataElementWrapper
      className="RedactionSearchOverlay"
      dataElement="redactionSearchOverlay"
    >
      <RedactionSearchMultiSelect
        onFocus={() => setIsRedactionSearchActive(true)}
        value={searchTerms}
        onCreateOption={handleCreate}
        onChange={handleChange}
        activeTheme={activeTheme}
        redactionSearchOptions={translatedOptions}
      />

    </DataElementWrapper>

  );
};

export default RedactionSearchOverlay;