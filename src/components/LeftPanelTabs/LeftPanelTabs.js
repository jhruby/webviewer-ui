import React from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { withTranslation } from 'react-i18next';

import Button from 'components/Button';
import Element from 'components/Element';

import DataElements from 'constants/dataElement';

import actions from 'actions';
import selectors from 'selectors';

import './LeftPanelTabs.scss';
import {getOutlineEditingEnabled} from "selectors/exposedSelectors";

class LeftPanelTabs extends React.Component {
  static propTypes = {
    isLeftPanelOpen: PropTypes.bool,
    showPortfolio: PropTypes.bool,
    activePanel: PropTypes.string.isRequired,
    disabledCustomPanelTabs: PropTypes.array.isRequired,
    customPanels: PropTypes.array.isRequired,
    isLeftPanelTabsDisabled: PropTypes.bool,
    setActiveLeftPanel: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired, 
    outlines: PropTypes.array.isRequired,
    outlineEditingEnabled: PropTypes.bool.isRequired
  };
  isActive = (panel) => this.props.activePanel === panel;

  render() {
    const {
      isLeftPanelOpen,
      showPortfolio,
      customPanels,
      isLeftPanelTabsDisabled,
      setActiveLeftPanel,
      notesInLeftPanel,
      openElement,
      outlines,
      outlineEditingEnabled
    } = this.props;

    if (isLeftPanelTabsDisabled) {
      return null;
    }

    return (
      <Element className="LeftPanelTabs" dataElement="leftPanelTabs">
        {showPortfolio &&
          <Button
            isActive={this.isActive(DataElements.PORTFOLIO_PANEL)}
            dataElement={DataElements.PORTFOLIO_PANEL_BUTTON}
            img="icon-compare-change"
            onClick={() => setActiveLeftPanel(DataElements.PORTFOLIO_PANEL)}
            title="portfolioPanel.portfolioPanelTitle"
            tabIndex={isLeftPanelOpen ? 0 : -1}
          />}
        <Button
          isActive={this.isActive('thumbnailsPanel')}
          dataElement="thumbnailsPanelButton"
          img="icon-panel-thumbnail-line"
          onClick={() => setActiveLeftPanel('thumbnailsPanel')}
          title="component.thumbnailsPanel"
          tabIndex={isLeftPanelOpen ? 0 : -1}
        />
        {outlineEditingEnabled || outlines.length > 0 && (
        <Button
          isActive={this.isActive('outlinesPanel')}
          dataElement="outlinesPanelButton"
          img="icon-panel-outlines"
          onClick={() => setActiveLeftPanel('outlinesPanel')}
          title="component.outlinesPanel"
          tabIndex={isLeftPanelOpen ? 0 : -1}
        />)}
        <Button
          isActive={this.isActive('layersPanel')}
          dataElement="layersPanelButton"
          img="ic_layers_24px"
          onClick={() => setActiveLeftPanel('layersPanel')}
          title="component.layersPanel"
          tabIndex={isLeftPanelOpen ? 0 : -1}
        />
        <Button
          isActive={this.isActive('bookmarksPanel')}
          dataElement="bookmarksPanelButton"
          img="ic_bookmarks_black_24px"
          onClick={() => setActiveLeftPanel('bookmarksPanel')}
          title="component.bookmarksPanel"
          tabIndex={isLeftPanelOpen ? 0 : -1}
        />
        <Button
          isActive={this.isActive('signaturePanel')}
          dataElement="signaturePanelButton"
          img="icon-tool-signature"
          onClick={() => setActiveLeftPanel('signaturePanel')}
          title="component.signaturePanel"
          tabIndex={isLeftPanelOpen ? 0 : -1}
        />
        <Button
          isActive={this.isActive('attachmentPanel')}
          dataElement="attachmentPanelButton"
          img="ic_fileattachment_24px"
          onClick={() => setActiveLeftPanel('attachmentPanel')}
          title="component.attachmentPanel"
          tabIndex={isLeftPanelOpen ? 0 : -1}
        />
        {notesInLeftPanel &&
          <Button
            isActive={this.isActive(DataElements.NOTES_PANEL)}
            dataElement="notesPanelButton"
            img="icon-header-chat-line"
            onClick={() => {
              openElement(DataElements.NOTES_PANEL);
              setActiveLeftPanel(DataElements.NOTES_PANEL);
            }}
            title="component.notesPanel"
          />}
        {customPanels.map(({ panel, tab }, index) => <React.Fragment key={index}>
          <Button
            key={tab.dataElement || index}
            isActive={this.isActive(panel.dataElement)}
            dataElement={tab.dataElement}
            img={tab.img}
            onClick={() => setActiveLeftPanel(panel.dataElement)}
            title={tab.title}
          />
          {index < customPanels.length - 1 && <div className="divider" />}
        </React.Fragment>,
        )}
      </Element>
    );
  }
}

const mapStateToProps = (state) => ({
  isLeftPanelOpen: selectors.isElementOpen(state, 'leftPanel'),
  activePanel: selectors.getActiveLeftPanel(state),
  customPanels: selectors.getCustomPanels(state),
  disabledCustomPanelTabs: selectors.getDisabledCustomPanelTabs(state),
  isLeftPanelTabsDisabled: selectors.isElementDisabled(state, 'leftPanelTabs'),
  notesInLeftPanel: selectors.getNotesInLeftPanel(state),
  outlines: selectors.getOutlines(state),
  outlineEditingEnabled: selectors.getOutlineEditingEnabled(state)
});

const mapDispatchToProps = {
  setActiveLeftPanel: actions.setActiveLeftPanel,
  openElement: actions.openElement,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(LeftPanelTabs));
