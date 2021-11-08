import core from 'core';

import { openElements } from "../apis";

const setupDocViewer = () => {
  const docViewer = core.getDocumentViewer();

  // at 100% zoom level, adjust this whenever zoom/fitmode is updated
  docViewer.DEFAULT_MARGIN = 10;
  addToolsToDocViewer(docViewer);
};



const addToolsToDocViewer = docViewer => {
  const toolModeMap = core.getToolModeMap();
  const { ToolNames } = window.Core.Tools;

  toolModeMap.AnnotationCreateTextHighlight2 = new window.Core.Tools.TextHighlightCreateTool(docViewer, ToolNames.HIGHLIGHT2);
  toolModeMap.AnnotationCreateTextHighlight3 = new window.Core.Tools.TextHighlightCreateTool(docViewer, ToolNames.HIGHLIGHT3);
  toolModeMap.AnnotationCreateTextHighlight4 = new window.Core.Tools.TextHighlightCreateTool(docViewer, ToolNames.HIGHLIGHT4);
  toolModeMap.AnnotationCreateFreeHand2 = new window.Core.Tools.FreeHandCreateTool(docViewer, ToolNames.FREEHAND2);
  toolModeMap.AnnotationCreateFreeHand3 = new window.Core.Tools.FreeHandCreateTool(docViewer, ToolNames.FREEHAND3);
  toolModeMap.AnnotationCreateFreeHand4 = new window.Core.Tools.FreeHandCreateTool(docViewer, ToolNames.FREEHAND4);
  toolModeMap.AnnotationCreateFreeHandHighlight2 = new window.Core.Tools.FreeHandHighlightCreateTool(docViewer, ToolNames.FREEHAND_HIGHLIGHT2);
  toolModeMap.AnnotationCreateFreeHandHighlight3 = new window.Core.Tools.FreeHandHighlightCreateTool(docViewer, ToolNames.FREEHAND_HIGHLIGHT3);
  toolModeMap.AnnotationCreateFreeHandHighlight4 = new window.Core.Tools.FreeHandHighlightCreateTool(docViewer, ToolNames.FREEHAND_HIGHLIGHT4);
  toolModeMap.AnnotationCreateFreeTextMath = new window.Core.Tools.FreeTextCreateTool(docViewer, ToolNames.FREETEXT);
  toolModeMap.AnnotationCreateFreeTextMath2 = new window.Core.Tools.FreeTextCreateTool(docViewer, ToolNames.FREETEXT2);
  toolModeMap.AnnotationCreateFreeTextMath3 = new window.Core.Tools.FreeTextCreateTool(docViewer, ToolNames.FREETEXT3);
  toolModeMap.AnnotationCreateFreeTextMath4 = new window.Core.Tools.FreeTextCreateTool(docViewer, ToolNames.FREETEXT4);
  toolModeMap.AnnotationCreateFreeText2 = new window.Core.Tools.FreeTextCreateTool(docViewer, ToolNames.FREETEXT2);
  toolModeMap.AnnotationCreateFreeText3 = new window.Core.Tools.FreeTextCreateTool(docViewer, ToolNames.FREETEXT3);
  toolModeMap.AnnotationCreateFreeText4 = new window.Core.Tools.FreeTextCreateTool(docViewer, ToolNames.FREETEXT4);
  toolModeMap.AnnotationCreateCallout2 = new window.Core.Tools.CalloutCreateTool(docViewer, ToolNames.CALLOUT2);
  toolModeMap.AnnotationCreateCallout3 = new window.Core.Tools.CalloutCreateTool(docViewer, ToolNames.CALLOUT3);
  toolModeMap.AnnotationCreateCallout4 = new window.Core.Tools.CalloutCreateTool(docViewer, ToolNames.CALLOUT4);
  toolModeMap.AnnotationCreateSticky2 = new window.Core.Tools.StickyCreateTool(docViewer, ToolNames.STICKY2);
  toolModeMap.AnnotationCreateSticky3 = new window.Core.Tools.StickyCreateTool(docViewer, ToolNames.STICKY3);
  toolModeMap.AnnotationCreateSticky4 = new window.Core.Tools.StickyCreateTool(docViewer, ToolNames.STICKY4);
  toolModeMap.AnnotationCreateTextUnderline2 = new window.Core.Tools.TextUnderlineCreateTool(docViewer, ToolNames.UNDERLINE2);
  toolModeMap.AnnotationCreateTextUnderline3 = new window.Core.Tools.TextUnderlineCreateTool(docViewer, ToolNames.UNDERLINE3);
  toolModeMap.AnnotationCreateTextUnderline4 = new window.Core.Tools.TextUnderlineCreateTool(docViewer, ToolNames.UNDERLINE4);
  toolModeMap.AnnotationCreateTextStrikeout2 = new window.Core.Tools.TextStrikeoutCreateTool(docViewer, ToolNames.STRIKEOUT2);
  toolModeMap.AnnotationCreateTextStrikeout3 = new window.Core.Tools.TextStrikeoutCreateTool(docViewer, ToolNames.STRIKEOUT3);
  toolModeMap.AnnotationCreateTextStrikeout4 = new window.Core.Tools.TextStrikeoutCreateTool(docViewer, ToolNames.STRIKEOUT4);
  toolModeMap.AnnotationCreateTextSquiggly2 = new window.Core.Tools.TextSquigglyCreateTool(docViewer, ToolNames.SQUIGGLY2);
  toolModeMap.AnnotationCreateTextSquiggly3 = new window.Core.Tools.TextSquigglyCreateTool(docViewer, ToolNames.SQUIGGLY3);
  toolModeMap.AnnotationCreateTextSquiggly4 = new window.Core.Tools.TextSquigglyCreateTool(docViewer, ToolNames.SQUIGGLY4);
  toolModeMap.AnnotationCreateRectangle2 = new window.Core.Tools.RectangleCreateTool(docViewer, ToolNames.RECTANGLE2);
  toolModeMap.AnnotationCreateRectangle3 = new window.Core.Tools.RectangleCreateTool(docViewer, ToolNames.RECTANGLE3);
  toolModeMap.AnnotationCreateRectangle4 = new window.Core.Tools.RectangleCreateTool(docViewer, ToolNames.RECTANGLE4);
  toolModeMap.AnnotationCreateEllipse2 = new window.Core.Tools.EllipseCreateTool(docViewer, ToolNames.ELLIPSE2);
  toolModeMap.AnnotationCreateEllipse3 = new window.Core.Tools.EllipseCreateTool(docViewer, ToolNames.ELLIPSE3);
  toolModeMap.AnnotationCreateEllipse4 = new window.Core.Tools.EllipseCreateTool(docViewer, ToolNames.ELLIPSE4);
  toolModeMap.AnnotationCreatePolygon2 = new window.Core.Tools.PolygonCreateTool(docViewer, ToolNames.POLYGON2);
  toolModeMap.AnnotationCreatePolygon3 = new window.Core.Tools.PolygonCreateTool(docViewer, ToolNames.POLYGON3);
  toolModeMap.AnnotationCreatePolygon4 = new window.Core.Tools.PolygonCreateTool(docViewer, ToolNames.POLYGON4);
  toolModeMap.AnnotationCreatePolygonCloud2 = new window.Core.Tools.PolygonCloudCreateTool(docViewer, ToolNames.POLYGON_CLOUD2);
  toolModeMap.AnnotationCreatePolygonCloud3 = new window.Core.Tools.PolygonCloudCreateTool(docViewer, ToolNames.POLYGON_CLOUD3);
  toolModeMap.AnnotationCreatePolygonCloud4 = new window.Core.Tools.PolygonCloudCreateTool(docViewer, ToolNames.POLYGON_CLOUD4);
  toolModeMap.AnnotationCreateLine2 = new window.Core.Tools.LineCreateTool(docViewer, ToolNames.LINE2);
  toolModeMap.AnnotationCreateLine3 = new window.Core.Tools.LineCreateTool(docViewer, ToolNames.LINE3);
  toolModeMap.AnnotationCreateLine4 = new window.Core.Tools.LineCreateTool(docViewer, ToolNames.LINE4);
  toolModeMap.AnnotationCreatePolyline2 = new window.Core.Tools.PolylineCreateTool(docViewer, ToolNames.POLYLINE2);
  toolModeMap.AnnotationCreatePolyline3 = new window.Core.Tools.PolylineCreateTool(docViewer, ToolNames.POLYLINE3);
  toolModeMap.AnnotationCreatePolyline4 = new window.Core.Tools.PolylineCreateTool(docViewer, ToolNames.POLYLINE4);
  toolModeMap.AnnotationCreateArrow2 = new window.Core.Tools.ArrowCreateTool(docViewer, ToolNames.ARROW2);
  toolModeMap.AnnotationCreateArrow3 = new window.Core.Tools.ArrowCreateTool(docViewer, ToolNames.ARROW3);
  toolModeMap.AnnotationCreateArrow4 = new window.Core.Tools.ArrowCreateTool(docViewer, ToolNames.ARROW4);
  toolModeMap.AnnotationCreateCountMeasurement2 = new window.Core.Tools.CountMeasurementCreateTool(docViewer, ToolNames.COUNT_MEASUREMENT2);
  toolModeMap.AnnotationCreateCountMeasurement3 = new window.Core.Tools.CountMeasurementCreateTool(docViewer, ToolNames.COUNT_MEASUREMENT3);
  toolModeMap.AnnotationCreateCountMeasurement4 = new window.Core.Tools.CountMeasurementCreateTool(docViewer, ToolNames.COUNT_MEASUREMENT4);
  toolModeMap.AnnotationCreateDistanceMeasurement2 = new window.Core.Tools.DistanceMeasurementCreateTool(docViewer, ToolNames.DISTANCE_MEASUREMENT2);
  toolModeMap.AnnotationCreateDistanceMeasurement3 = new window.Core.Tools.DistanceMeasurementCreateTool(docViewer, ToolNames.DISTANCE_MEASUREMENT3);
  toolModeMap.AnnotationCreateDistanceMeasurement4 = new window.Core.Tools.DistanceMeasurementCreateTool(docViewer, ToolNames.DISTANCE_MEASUREMENT4);
  toolModeMap.AnnotationCreatePerimeterMeasurement2 = new window.Core.Tools.PerimeterMeasurementCreateTool(docViewer, ToolNames.PERIMETER_MEASUREMENT2);
  toolModeMap.AnnotationCreatePerimeterMeasurement3 = new window.Core.Tools.PerimeterMeasurementCreateTool(docViewer, ToolNames.PERIMETER_MEASUREMENT3);
  toolModeMap.AnnotationCreatePerimeterMeasurement4 = new window.Core.Tools.PerimeterMeasurementCreateTool(docViewer, ToolNames.PERIMETER_MEASUREMENT4);
  toolModeMap.AnnotationCreateAreaMeasurement2 = new window.Core.Tools.AreaMeasurementCreateTool(docViewer, ToolNames.AREA_MEASUREMENT2);
  toolModeMap.AnnotationCreateAreaMeasurement3 = new window.Core.Tools.AreaMeasurementCreateTool(docViewer, ToolNames.AREA_MEASUREMENT3);
  toolModeMap.AnnotationCreateAreaMeasurement4 = new window.Core.Tools.AreaMeasurementCreateTool(docViewer, ToolNames.AREA_MEASUREMENT4);
  toolModeMap.AnnotationCreateEllipseMeasurement2 = new window.Core.Tools.EllipseMeasurementCreateTool(docViewer, ToolNames.ELLIPSE_MEASUREMENT2);
  toolModeMap.AnnotationCreateEllipseMeasurement3 = new window.Core.Tools.EllipseMeasurementCreateTool(docViewer, ToolNames.ELLIPSE_MEASUREMENT3);
  toolModeMap.AnnotationCreateEllipseMeasurement4 = new window.Core.Tools.EllipseMeasurementCreateTool(docViewer, ToolNames.ELLIPSE_MEASUREMENT4);
  toolModeMap.AnnotationCreateRectangularAreaMeasurement2 = new window.Core.Tools.RectangularAreaMeasurementCreateTool(docViewer, ToolNames.RECTANGULAR_AREA_MEASUREMENT2);
  toolModeMap.AnnotationCreateRectangularAreaMeasurement3 = new window.Core.Tools.RectangularAreaMeasurementCreateTool(docViewer, ToolNames.RECTANGULAR_AREA_MEASUREMENT3);
  toolModeMap.AnnotationCreateRectangularAreaMeasurement4 = new window.Core.Tools.RectangularAreaMeasurementCreateTool(docViewer, ToolNames.RECTANGULAR_AREA_MEASUREMENT4);
  toolModeMap.TextFormFieldCreateTool2 = new window.Core.Tools.TextFormFieldCreateTool(docViewer, ToolNames.TEXT_FORM_FIELD2);
  toolModeMap.TextFormFieldCreateTool3 = new window.Core.Tools.TextFormFieldCreateTool(docViewer, ToolNames.TEXT_FORM_FIELD3);
  toolModeMap.TextFormFieldCreateTool4 = new window.Core.Tools.TextFormFieldCreateTool(docViewer, ToolNames.TEXT_FORM_FIELD4);
  toolModeMap.SignatureFormFieldCreateTool2 = new window.Core.Tools.SignatureFormFieldCreateTool(docViewer, ToolNames.SIG_FORM_FIELD2);
  toolModeMap.SignatureFormFieldCreateTool3 = new window.Core.Tools.SignatureFormFieldCreateTool(docViewer, ToolNames.SIG_FORM_FIELD3);
  toolModeMap.SignatureFormFieldCreateTool4 = new window.Core.Tools.SignatureFormFieldCreateTool(docViewer, ToolNames.SIG_FORM_FIELD4);
  toolModeMap.ListBoxFormFieldCreateTool2 = new window.Core.Tools.ListBoxFormFieldCreateTool(docViewer, ToolNames.LIST_BOX_FIELD2);
  toolModeMap.ListBoxFormFieldCreateTool3 = new window.Core.Tools.ListBoxFormFieldCreateTool(docViewer, ToolNames.LIST_BOX_FIELD3);
  toolModeMap.ListBoxFormFieldCreateTool4 = new window.Core.Tools.ListBoxFormFieldCreateTool(docViewer, ToolNames.LIST_BOX_FIELD4);
  toolModeMap.ComboBoxFormFieldCreateTool2 = new window.Core.Tools.ComboBoxFormFieldCreateTool(docViewer, ToolNames.COMBO_BOX_FIELD2);
  toolModeMap.ComboBoxFormFieldCreateTool3 = new window.Core.Tools.ComboBoxFormFieldCreateTool(docViewer, ToolNames.COMBO_BOX_FIELD3);
  toolModeMap.ComboBoxFormFieldCreateTool4 = new window.Core.Tools.ComboBoxFormFieldCreateTool(docViewer, ToolNames.COMBO_BOX_FIELD4);
  toolModeMap.AnnotationCreateCloudyRectangularAreaMeasurement2 = new window.Core.Tools.CloudyRectangularAreaMeasurementCreateTool(docViewer, ToolNames.CLOUDY_RECTANGULAR_AREA_MEASUREMENT2);
  toolModeMap.AnnotationCreateCloudyRectangularAreaMeasurement3 = new window.Core.Tools.CloudyRectangularAreaMeasurementCreateTool(docViewer, ToolNames.CLOUDY_RECTANGULAR_AREA_MEASUREMENT3);
  toolModeMap.AnnotationCreateCloudyRectangularAreaMeasurement4 = new window.Core.Tools.CloudyRectangularAreaMeasurementCreateTool(docViewer, ToolNames.CLOUDY_RECTANGULAR_AREA_MEASUREMENT4);
};

export default setupDocViewer;
