import React from 'react';
import ReactDOM from 'react-dom';
import ol from 'openlayers';
import {IntlProvider} from 'react-intl';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Button from '@boundlessgeo/sdk/components/Button';
import Header from '@boundlessgeo/sdk/components/Header';
import enMessages from '@boundlessgeo/sdk/locale/en';
import InfoPopup from '@boundlessgeo/sdk/components/InfoPopup';
import MapPanel from '@boundlessgeo/sdk/components/MapPanel';
import {ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';

import ZoomToLatLon from '@boundlessgeo/sdk/components/ZoomToLatLon';
import LayerList from '@boundlessgeo/sdk/components/LayerList';
import Fullscreen from '@boundlessgeo/sdk/components/Fullscreen';
import Measure from '@boundlessgeo/sdk/components/Measure';
import Navigation from '@boundlessgeo/sdk/components/Navigation';
import Rotate from '@boundlessgeo/sdk/components/Rotate';
import Zoom from '@boundlessgeo/sdk/components/Zoom';
import QGISLegend from '@boundlessgeo/sdk/components/QGISLegend';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

var defaultFill = new ol.style.Fill({
   color: 'rgba(255,255,255,0.4)'
 });
 var defaultStroke = new ol.style.Stroke({
   color: '#3399CC',
   width: 1.25
 });
 var defaultSelectionFill = new ol.style.Fill({
   color: 'rgba(255,255,0,0.4)'
 });
 var defaultSelectionStroke = new ol.style.Stroke({
   color: '#FFFF00',
   width: 1.25
 });



                    var textStyleCache_readeinfluenciasocioeconmica={}
                    var clusterStyleCache_readeinfluenciasocioeconmica={}
                    var style_readeinfluenciasocioeconmica = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_readeinfluenciasocioeconmica'
        };
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(147,250,2,0.309803921569)"}),
zIndex: 0
                            })
                            ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_readeinfluenciasocioeconmica = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_readeinfluenciasocioeconmica'
        };
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_zonaperifricadeproteccin={}
                    var clusterStyleCache_zonaperifricadeproteccin={}
                    var style_zonaperifricadeproteccin = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_zonaperifricadeproteccin'
        };
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(149,226,16,0.501960784314)"}),
zIndex: 0
                            })
                            ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_zonaperifricadeproteccin = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_zonaperifricadeproteccin'
        };
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_readeespecialproteccin={}
                    var clusterStyleCache_readeespecialproteccin={}
                    var style_readeespecialproteccin = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_readeespecialproteccin'
        };
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(252,178,3,0.501960784314)"}),
zIndex: 0
                            })
                            ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_readeespecialproteccin = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_readeespecialproteccin'
        };
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_lmiteparquenacional={}
                    var clusterStyleCache_lmiteparquenacional={}
                    var style_lmiteparquenacional = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_lmiteparquenacional'
        };
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(48,120,9,0.301960784314)"}),
zIndex: 0
                            })
                            ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_lmiteparquenacional = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_lmiteparquenacional'
        };
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_municipiosdesegovia={}
                    var clusterStyleCache_municipiosdesegovia={}
                    var style_municipiosdesegovia = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_municipiosdesegovia'
        };
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(139,24,33,0.0)"}),
zIndex: 0
                            })
                            ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_municipiosdesegovia = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_municipiosdesegovia'
        };
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_zonificacinparquenacional = function(){ return {"Zona de Reserva": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(252,153,253,1.0)"}),
zIndex: 0
                            })
                            ],
"Zona de Uso Especial": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(173,89,247,1.0)"}),
zIndex: 0
                            })
                            ],
"Zona de Uso Moderado A": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(226,213,147,1.0)"}),
zIndex: 0
                            })
                            ],
"Zona de Uso Moderado B": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(149,12,28,1.0)"}),
zIndex: 0
                            })
                            ],
"Zona de Uso Moderado C": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(253,253,29,1.0)"}),
zIndex: 0
                            })
                            ],
"Zona de Uso Moderado D": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(202,182,215,1.0)"}),
zIndex: 0
                            })
                            ],
"Zona de Uso Restringido A": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(95,177,19,1.0)"}),
zIndex: 0
                            })
                            ],
"Zona de Uso Restringido B": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(193,253,38,1.0)"}),
zIndex: 0
                            })
                            ],
"Zona de Uso Restringido C": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(218,241,177,1.0)"}),
zIndex: 0
                            })
                            ]};};var categoriesSelected_zonificacinparquenacional = {"Zona de Reserva": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Zona de Uso Especial": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Zona de Uso Moderado A": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Zona de Uso Moderado B": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Zona de Uso Moderado C": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Zona de Uso Moderado D": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Zona de Uso Restringido A": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Zona de Uso Restringido B": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Zona de Uso Restringido C": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]};
                    var textStyleCache_zonificacinparquenacional={}
                    var clusterStyleCache_zonificacinparquenacional={}
                    var style_zonificacinparquenacional = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_zonificacinparquenacional'
        };
                        
                        var value = feature.get("ZONIFICA");
                        var style = categories_zonificacinparquenacional()[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_zonificacinparquenacional = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_zonificacinparquenacional'
        };
                        var value = feature.get("ZONIFICA");
                        var style = categoriesSelected_zonificacinparquenacional[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_zonasdeescaladayvivacdelparquenacional = function(){ return {"escalada": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(17,179,187,1.0)"}),
zIndex: 0
                            })
                            ],
"vivac": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(238,34,225,1.0)"}),
zIndex: 0
                            })
                            ]};};var categoriesSelected_zonasdeescaladayvivacdelparquenacional = {"escalada": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"vivac": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]};
                    var textStyleCache_zonasdeescaladayvivacdelparquenacional={}
                    var clusterStyleCache_zonasdeescaladayvivacdelparquenacional={}
                    var style_zonasdeescaladayvivacdelparquenacional = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_zonasdeescaladayvivacdelparquenacional'
        };
                        
                        var value = feature.get("ACTIVIDAD");
                        var style = categories_zonasdeescaladayvivacdelparquenacional()[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_zonasdeescaladayvivacdelparquenacional = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_zonasdeescaladayvivacdelparquenacional'
        };
                        var value = feature.get("ACTIVIDAD");
                        var style = categoriesSelected_zonasdeescaladayvivacdelparquenacional[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_vialesaptosparatransitodebicicletasycaballos={}
                    var clusterStyleCache_vialesaptosparatransitodebicicletasycaballos={}
                    var style_vialesaptosparatransitodebicicletasycaballos = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_vialesaptosparatransitodebicicletasycaballos'
        };
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(240,20,13,1.0)", lineDash: null, width: pixelsFromMm(0.36)}),
zIndex: 0
                            })
                            ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_vialesaptosparatransitodebicicletasycaballos = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_vialesaptosparatransitodebicicletasycaballos'
        };
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.36)}),
zIndex: 0
                            })
                            ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_municipioscomunidaddemadrid={}
                    var clusterStyleCache_municipioscomunidaddemadrid={}
                    var style_municipioscomunidaddemadrid = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_municipioscomunidaddemadrid'
        };
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(5,59,251,0.0078431372549)"}),
zIndex: 0
                            })
                            ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_municipioscomunidaddemadrid = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_municipioscomunidaddemadrid'
        };
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var baseLayers = [new ol.layer.Tile({
    type: 'base',
    title: 'ESRI world street map',
    source: new ol.source.XYZ({
        crossOrigin: 'anonymous',
        attributions: [new ol.Attribution({ html: 'Tiles &copy; <a href="http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer">ArcGIS</a>'})],
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
    }),
    projection: 'EPSG:3857'
})
,new ol.layer.Tile({
    type: 'base',
    title: 'Stamen terrain',
    source: new ol.source.Stamen({
        crossOrigin: 'anonymous',
        layer: 'terrain'}),
    projection: 'EPSG:3857'
})
];var baseLayersGroup = new ol.layer.Group({showContent: true,
                    'isGroupExpanded': false, 'type': 'base-group',
                    'title': 'Base maps', layers: baseLayers});var overviewMapBaseLayer = baseLayersGroup;
var overlayLayers = [];var overlaysGroup = new ol.layer.Group({showContent: true,
                        'isGroupExpanded': false, 'title': 'Overlays', layers: overlayLayers});
var lyr_readeinfluenciasocioeconmica = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_readeinfluenciasocioeconmica.json'
                            }),
                     
                    style: style_readeinfluenciasocioeconmica,
                    selectedStyle: selectionStyle_readeinfluenciasocioeconmica,
                    title: "Área de Influencia Socioeconómica",
                    id: "AIS_PN_Sierra_Guadarrama20180202150431081",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "",
                    attributes: ["NOM_MUM", "CO_INE_PRO", "CO_INE_MUN", "TIPO_CENTR", "Shape_Leng", "Shape_Area", "TIPO__DESC"],
                    geometryType: "Polygon"
                });
var lyr_readeinfluenciasocioeconmica_overview = new ol.layer.Vector({
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_readeinfluenciasocioeconmica.json'
                            }),
                     
                    style: style_readeinfluenciasocioeconmica});
var lyr_zonaperifricadeproteccin = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_zonaperifricadeproteccin.json'
                            }),
                     
                    style: style_zonaperifricadeproteccin,
                    selectedStyle: selectionStyle_zonaperifricadeproteccin,
                    title: "Zona Periférica de Protección",
                    id: "ZPP_PN_Sierra_Guadarrama20180202150431086",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "",
                    attributes: ["SHAPE_Leng", "SHAPE_Area", "Nombre"],
                    geometryType: "Polygon"
                });
var lyr_zonaperifricadeproteccin_overview = new ol.layer.Vector({
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_zonaperifricadeproteccin.json'
                            }),
                     
                    style: style_zonaperifricadeproteccin});
var lyr_readeespecialproteccin = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_readeespecialproteccin.json'
                            }),
                     
                    style: style_readeespecialproteccin,
                    selectedStyle: selectionStyle_readeespecialproteccin,
                    title: "Área de Especial Protección",
                    id: "AEP_PN_Sierra_Guadarrama20180202150431046",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "",
                    attributes: ["ZONAS", "HECTARES", "Nombre", "Shape_Leng", "Shape_Area"],
                    geometryType: "Polygon"
                });
var lyr_readeespecialproteccin_overview = new ol.layer.Vector({
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_readeespecialproteccin.json'
                            }),
                     
                    style: style_readeespecialproteccin});
var lyr_lmiteparquenacional = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_lmiteparquenacional.json'
                            }),
                     
                    style: style_lmiteparquenacional,
                    selectedStyle: selectionStyle_lmiteparquenacional,
                    title: "Límite Parque Nacional",
                    id: "Limites_PN_Sierra_Guadarrama20180803113500875",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "",
                    attributes: ["Fecha_dec", "SHAPE_Leng", "SHAPE_Area", "Nombre", "Superf_Ha", "Declaracio", "Reclasific", "Ampliacion"],
                    geometryType: "Polygon"
                });
var lyr_lmiteparquenacional_overview = new ol.layer.Vector({
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_lmiteparquenacional.json'
                            }),
                     
                    style: style_lmiteparquenacional});
var lyr_municipiosdesegovia = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_municipiosdesegovia.json'
                            }),
                     
                    style: style_municipiosdesegovia,
                    selectedStyle: selectionStyle_municipiosdesegovia,
                    title: "Municipios de Segovia",
                    id: "segovia20180801110512186",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<head> <style type='text/css'> .popup-table { 	font-size: 10px; } </style> </head>  <body><table width='328' border='1' class='popup-table'>   <tr bgcolor='#CCCCCC'>     <th colspan='2'>MUNICIPIO</th>   <tr bgcolor='#CCCCCC'><th width='86'>Parámetro</th>   <th width='229'>Valor</th>    <tr><td>Municipio</td><td style='text-align:left'>[NAMEUNIT]</td></tr></table>",
                    attributes: ["INSPIREID", "COUNTRY", "NATLEVEL", "NATCODE", "NAMEUNIT", "CODNUT1", "CODNUT2", "CODNUT3"],
                    geometryType: "Polygon"
                });
var lyr_municipiosdesegovia_overview = new ol.layer.Vector({
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_municipiosdesegovia.json'
                            }),
                     
                    style: style_municipiosdesegovia});
var lyr_zonificacinparquenacional = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_zonificacinparquenacional.json'
                            }),
                     
                    style: style_zonificacinparquenacional,
                    selectedStyle: selectionStyle_zonificacinparquenacional,
                    title: "Zonificación Parque Nacional",
                    id: "PARQUE_220180728111314310",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<head> <style type='text/css'> .popup-table { 	font-size: 10px; } </style> </head>  <body><table width='328' border='1' class='popup-table'>   <tr bgcolor='#CCCCCC'>     <th colspan='2'>ZONIFICACIÓN PN Sierra de Guadarrama</th>   <tr bgcolor='#CCCCCC'><th width='86'>Parámetro</th>   <th width='229'>Valor</th>    <tr><td>Zonificación</td><td style='text-align:left'>[ZONIFICA]</td></tr><tr><td>Nombre</td><td style='text-align:left'>[NOMBRE]</td></tr><tr><td>Provincia</td><td style='text-align:left'>[NOM_PROV]</td></tr><tr><td>Área (ha)</td><td style='text-align:left'>[SUPER_HA]</td></tr></table>",
                    attributes: ["FID", "ZONIFICA", "NOMBRE", "NOM_PROV", "COD_CCAA", "COD_ZONIF", "ID_PARQUE", "SEGOVIA", "SOLAPES", "POINT_X", "POINT_Y", "SUPER_HA"],
                    geometryType: "Polygon"
                });
var lyr_zonificacinparquenacional_overview = new ol.layer.Vector({
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_zonificacinparquenacional.json'
                            }),
                     
                    style: style_zonificacinparquenacional});
var lyr_zonasdeescaladayvivacdelparquenacional = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_zonasdeescaladayvivacdelparquenacional.json'
                            }),
                     
                    style: style_zonasdeescaladayvivacdelparquenacional,
                    selectedStyle: selectionStyle_zonasdeescaladayvivacdelparquenacional,
                    title: "Zonas de Escalada y vivac del Parque Nacional",
                    id: "ESCALADA_Y_VIVAC20180730145950932",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<head> <style type='text/css'> .popup-table { 	font-size: 10px; } </style> </head>  <body><table width='328' border='1' class='popup-table'>   <tr bgcolor='#CCCCCC'>     <th colspan='2'>ZONAS DE ESCALADA Y VIVAC</th>   <tr bgcolor='#CCCCCC'><th width='86'>Parámetro</th>   <th width='229'>Valor</th>   <tr><td>Sector</td><td style='text-align:left'>[SECTOR]</td></tr><tr><td>Zona</td><td style='text-align:left'>[ZONA]</td></tr><tr><td>Escuela</td><td style='text-align:left'>[ESCUELA]</td></tr><tr><td>Actividad</td><td style='text-align:left'>[ACTIVIDAD]</td></tr></table>",
                    attributes: ["FID", "SECTOR", "ZONA", "ID2", "ESCUELA", "IDE1", "NOMBRE", "ACTIVIDAD"],
                    geometryType: "Polygon"
                });
var lyr_zonasdeescaladayvivacdelparquenacional_overview = new ol.layer.Vector({
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_zonasdeescaladayvivacdelparquenacional.json'
                            }),
                     
                    style: style_zonasdeescaladayvivacdelparquenacional});
var lyr_vialesaptosparatransitodebicicletasycaballos = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_vialesaptosparatransitodebicicletasycaballos.json'
                            }),
                     
                    style: style_vialesaptosparatransitodebicicletasycaballos,
                    selectedStyle: selectionStyle_vialesaptosparatransitodebicicletasycaballos,
                    title: "Viales aptos para transito de bicicletas y caballos",
                    id: "RUTAS_BICI20180815140121504",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<head> <style type='text/css'> .popup-table { 	font-size: 10px; } </style> </head>  <body><table width='328' border='1' class='popup-table'>   <tr bgcolor='#CCCCCC'>     <th colspan='2'>VIALES APTOS PARA TRANSITO DE BICICLETAS Y CABALLOS</th>   <tr bgcolor='#CCCCCC'><th width='86'>Parámetro</th>   <th width='229'>Valor</th>    <tr><td>Nombre</td><td style='text-align:left'>[NOMBRE]</td></tr><tr><td>Zona</td><td style='text-align:left'>[ZONA]</td></tr><tr><td>Anchura</td><td style='text-align:left'>[ANCHURA]</td></tr><tr><td>Longitud</td><td style='text-align:left'>[LONGITUD]</td></tr></table>",
                    attributes: ["FID", "NOMBRE", "ID_PISTA", "ZONA", "T_FIRME", "ANCHURA", "LONGITUD"],
                    geometryType: "Line"
                });
var lyr_vialesaptosparatransitodebicicletasycaballos_overview = new ol.layer.Vector({
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_vialesaptosparatransitodebicicletasycaballos.json'
                            }),
                     
                    style: style_vialesaptosparatransitodebicicletasycaballos});
var lyr_municipioscomunidaddemadrid = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_municipioscomunidaddemadrid.json'
                            }),
                     
                    style: style_municipioscomunidaddemadrid,
                    selectedStyle: selectionStyle_municipioscomunidaddemadrid,
                    title: "Municipios Comunidad de Madrid",
                    id: "madrid20180801110238866",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<head> <style type='text/css'> .popup-table { 	font-size: 10px; } </style> </head>  <body><table width='328' border='1' class='popup-table'>   <tr bgcolor='#CCCCCC'>     <th colspan='2'>MUNICIPIO</th>   <tr bgcolor='#CCCCCC'><th width='86'>Parámetro</th>   <th width='229'>Valor</th>   <tr><td>Municipio</td><td style='text-align:left'>[NAMEUNIT]</td></tr></table>",
                    attributes: ["INSPIREID", "COUNTRY", "NATLEVEL", "NATCODE", "NAMEUNIT", "CODNUT1", "CODNUT2", "CODNUT3"],
                    geometryType: "Polygon"
                });
var lyr_municipioscomunidaddemadrid_overview = new ol.layer.Vector({
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_municipioscomunidaddemadrid.json'
                            }),
                     
                    style: style_municipioscomunidaddemadrid});

lyr_readeinfluenciasocioeconmica.setVisible(true);
lyr_zonaperifricadeproteccin.setVisible(true);
lyr_readeespecialproteccin.setVisible(true);
lyr_lmiteparquenacional.setVisible(true);
lyr_municipiosdesegovia.setVisible(true);
lyr_zonificacinparquenacional.setVisible(true);
lyr_zonasdeescaladayvivacdelparquenacional.setVisible(true);
lyr_vialesaptosparatransitodebicicletasycaballos.setVisible(true);
lyr_municipioscomunidaddemadrid.setVisible(true);
for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}
baseLayers[0].setVisible(true);
var layersList = [lyr_readeinfluenciasocioeconmica,lyr_zonaperifricadeproteccin,lyr_readeespecialproteccin,lyr_lmiteparquenacional,lyr_municipiosdesegovia,lyr_zonificacinparquenacional,lyr_zonasdeescaladayvivacdelparquenacional,lyr_vialesaptosparatransitodebicicletasycaballos,lyr_municipioscomunidaddemadrid];layersList.unshift(baseLayersGroup);
var layersMap  = {'lyr_readeinfluenciasocioeconmica':lyr_readeinfluenciasocioeconmica,'lyr_zonaperifricadeproteccin':lyr_zonaperifricadeproteccin,'lyr_readeespecialproteccin':lyr_readeespecialproteccin,'lyr_lmiteparquenacional':lyr_lmiteparquenacional,'lyr_municipiosdesegovia':lyr_municipiosdesegovia,'lyr_zonificacinparquenacional':lyr_zonificacinparquenacional,'lyr_zonasdeescaladayvivacdelparquenacional':lyr_zonasdeescaladayvivacdelparquenacional,'lyr_vialesaptosparatransitodebicicletasycaballos':lyr_vialesaptosparatransitodebicicletasycaballos,'lyr_municipioscomunidaddemadrid':lyr_municipioscomunidaddemadrid};
var legendData = {"RUTAS_BICI20180815140121504": [{"href": "7_0.png", "title": ""}], "ZPP_PN_Sierra_Guadarrama20180202150431086": [{"href": "1_0.png", "title": ""}], "Limites_PN_Sierra_Guadarrama20180803113500875": [{"href": "3_0.png", "title": ""}], "segovia20180801110512186": [{"href": "4_0.png", "title": ""}], "ESCALADA_Y_VIVAC20180730145950932": [{"href": "6_0.png", "title": "escalada"}, {"href": "6_1.png", "title": "vivac"}], "PARQUE_220180728111314310": [{"href": "5_0.png", "title": "Zona de Reserva"}, {"href": "5_1.png", "title": "Zona de Uso Especial"}, {"href": "5_2.png", "title": "Zona de Uso Moderado A"}, {"href": "5_3.png", "title": "Zona de Uso Moderado B"}, {"href": "5_4.png", "title": "Zona de Uso Moderado C"}, {"href": "5_5.png", "title": "Zona de Uso Moderado D"}, {"href": "5_6.png", "title": "Zona de Uso Restringido A"}, {"href": "5_7.png", "title": "Zona de Uso Restringido B"}, {"href": "5_8.png", "title": "Zona de Uso Restringido C"}], "madrid20180801110238866": [{"href": "8_0.png", "title": ""}], "AEP_PN_Sierra_Guadarrama20180202150431046": [{"href": "2_0.png", "title": ""}], "AIS_PN_Sierra_Guadarrama20180202150431081": [{"href": "0_0.png", "title": ""}]};
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [-461108.532429, 4957619.348442, -418170.478029, 5028029.488989];
var unitsConversion = 111325.0;

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: [new ol.control.ScaleLine({"minWidth": 64, "units": "metric"})]
});



class BasicApp extends React.Component {
  getChildContext() {
    return {
      muiTheme: getMuiTheme()
    };
  }
  componentDidMount() {
    map.addControl(new ol.control.OverviewMap({collapsed: true, layers: [overviewMapBaseLayer, lyr_readeinfluenciasocioeconmica_overview,lyr_zonaperifricadeproteccin_overview,lyr_readeespecialproteccin_overview,lyr_lmiteparquenacional_overview,lyr_municipiosdesegovia_overview,lyr_zonificacinparquenacional_overview,lyr_zonasdeescaladayvivacdelparquenacional_overview,lyr_vialesaptosparatransitodebicicletasycaballos_overview,lyr_municipioscomunidaddemadrid_overview]}));
  }
  _toggle(el) {
    if (el.style.display === 'block') {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  }
  _toggleTable() {
    this._toggle(document.getElementById('table-panel'));
    this.refs.table.getWrappedInstance().setDimensionsOnState();
  }
  _toggleWFST() {
    this._toggle(document.getElementById('wfst'));
  }
  _toggleQuery() {
    this._toggle(document.getElementById('query-panel'));
  }
  _toggleEdit() {
    this._toggle(document.getElementById('edit-tool-panel'));
  }
  _hideAboutPanel(evt) {
    evt.preventDefault();
    document.getElementById('about-panel').style.display = 'none';
  }
  _toggleChartPanel(evt) {
    evt.preventDefault();
    this._toggle(document.getElementById('chart-panel'));
  }
  render() {
    var toolbarOptions = {title:"Parque Nacional Sierra de Guadarrama"};
    return React.createElement("article", null,
      React.createElement(Header, toolbarOptions ,
React.createElement(ZoomToLatLon, {map:map}),
React.createElement(Measure, {toggleGroup:'navigation', map:map, geodesic:true}),
React.createElement(Navigation, {toggleGroup: 'navigation', secondary: true})),
      React.createElement("div", {id: 'content'},
        React.createElement(MapPanel, {id: 'map', map: map, extent: originalExtent, useHistory: true}
          ,
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {toggleGroup: 'navigation', map: map, hover: false})
                                  )
        )
        ,
React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:true, showDownload:false,
                                        showZoomTo:true, allowReordering:true,
                                        allowFiltering:false, tipLabel:'capas',
                                        downloadFormat:'GeoJSON', showUpload:false, map:map,
                                        includeLegend:true, allowStyling:true, showTable:false})),
React.createElement("div", {id:'fullscreen-button'},
                                    React.createElement(Fullscreen, {tooltipPosition: 'bottom-right', map:map})
                                  ),
React.createElement("div", {id:'rotate-button'},
                                    React.createElement(Rotate, {
                                    autoHide:false,
                                    duration:250,
                                    map: map,
                                    tooltipPosition: 'bottom-right'})
                                  ),
React.createElement("div", {id:'zoom-buttons'},
                                    React.createElement(Zoom, {
                                    duration:250,
                                    zoomInTipLabel: 'Zoom in',
                                    zoomOutTipLabel: 'Zoom out',
                                    delta: 1.2,
                                    map: map,
                                    tooltipPosition: 'bottom-right'})
                                  ),
React.createElement("div",{id: "legend"},
                                React.createElement(QGISLegend, {map:map, size:20, legendBasePath:'./resources/legend/',showExpandedOnStartup:false, legendData:legendData})
                            )
      )
    );
  }
}

BasicApp.childContextTypes = {
  muiTheme: React.PropTypes.object
};

ReactDOM.render(<IntlProvider locale='en' messages={enMessages}><BasicApp /></IntlProvider>, document.getElementById('main'));
