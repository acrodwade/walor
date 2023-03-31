var wms_layers = [];

var format_WaLOR_pollutant_retention_water_soluble_0 = new ol.format.GeoJSON();
var features_WaLOR_pollutant_retention_water_soluble_0 = format_WaLOR_pollutant_retention_water_soluble_0.readFeatures(json_WaLOR_pollutant_retention_water_soluble_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaLOR_pollutant_retention_water_soluble_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaLOR_pollutant_retention_water_soluble_0.addFeatures(features_WaLOR_pollutant_retention_water_soluble_0);
var lyr_WaLOR_pollutant_retention_water_soluble_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaLOR_pollutant_retention_water_soluble_0, 
                style: style_WaLOR_pollutant_retention_water_soluble_0,
                interactive: true,
                title: 'WaLOR_pollutant_retention_water_soluble'
            });
var format_WaLOR_pollutant_retention_soil_adsorbed_1 = new ol.format.GeoJSON();
var features_WaLOR_pollutant_retention_soil_adsorbed_1 = format_WaLOR_pollutant_retention_soil_adsorbed_1.readFeatures(json_WaLOR_pollutant_retention_soil_adsorbed_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaLOR_pollutant_retention_soil_adsorbed_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaLOR_pollutant_retention_soil_adsorbed_1.addFeatures(features_WaLOR_pollutant_retention_soil_adsorbed_1);
var lyr_WaLOR_pollutant_retention_soil_adsorbed_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaLOR_pollutant_retention_soil_adsorbed_1, 
                style: style_WaLOR_pollutant_retention_soil_adsorbed_1,
                interactive: true,
                title: 'WaLOR_pollutant_retention_soil_adsorbed'
            });
var format_WaLOR_flood_mitigation_2 = new ol.format.GeoJSON();
var features_WaLOR_flood_mitigation_2 = format_WaLOR_flood_mitigation_2.readFeatures(json_WaLOR_flood_mitigation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaLOR_flood_mitigation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaLOR_flood_mitigation_2.addFeatures(features_WaLOR_flood_mitigation_2);
var lyr_WaLOR_flood_mitigation_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaLOR_flood_mitigation_2, 
                style: style_WaLOR_flood_mitigation_2,
                interactive: true,
                title: 'WaLOR_flood_mitigation'
            });
var format_WaLOR_erosion_control_3 = new ol.format.GeoJSON();
var features_WaLOR_erosion_control_3 = format_WaLOR_erosion_control_3.readFeatures(json_WaLOR_erosion_control_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaLOR_erosion_control_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaLOR_erosion_control_3.addFeatures(features_WaLOR_erosion_control_3);
var lyr_WaLOR_erosion_control_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaLOR_erosion_control_3, 
                style: style_WaLOR_erosion_control_3,
                interactive: true,
                title: 'WaLOR_erosion_control'
            });
var format_WaLOR_overall_4 = new ol.format.GeoJSON();
var features_WaLOR_overall_4 = format_WaLOR_overall_4.readFeatures(json_WaLOR_overall_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaLOR_overall_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaLOR_overall_4.addFeatures(features_WaLOR_overall_4);
var lyr_WaLOR_overall_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaLOR_overall_4, 
                style: style_WaLOR_overall_4,
                interactive: true,
                title: 'WaLOR_overall'
            });
var lyr_WaLOR_flood_mitigation_surface_flow_indicator_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "WaLOR_flood_mitigation_surface_flow_indicator",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WaLOR_flood_mitigation_surface_flow_indicator_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [69020.609876, 6854787.824860, 127833.179092, 6887260.110285]
                            })
                        });
var lyr_WaLOR_surface_depressions_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "WaLOR_surface_depressions",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WaLOR_surface_depressions_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [69020.609876, 6854787.824860, 127833.179092, 6887260.110285]
                            })
                        });
var lyr_WaLOR_erosion_control_percent_thresholds_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "WaLOR_erosion_control_percent_thresholds",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WaLOR_erosion_control_percent_thresholds_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [69020.609876, 6854787.824860, 127833.179092, 6887260.110285]
                            })
                        });
var lyr_WaLOR_flood_mitigation_percent_thresholds_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "WaLOR_flood_mitigation_percent_thresholds",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WaLOR_flood_mitigation_percent_thresholds_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [69020.609876, 6854787.824860, 127833.179092, 6887260.110285]
                            })
                        });
var lyr_WaLOR_overall_percent_thresholds_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "WaLOR_overall_percent_thresholds",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WaLOR_overall_percent_thresholds_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [69020.609876, 6854787.824860, 127833.179092, 6887260.110285]
                            })
                        });
var lyr_WaLOR_pollutant_retention_soil_adsorbed_percent_thresholds_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "WaLOR_pollutant_retention_soil_adsorbed_percent_thresholds",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WaLOR_pollutant_retention_soil_adsorbed_percent_thresholds_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [69020.609876, 6854787.824860, 127833.179092, 6887260.110285]
                            })
                        });
var lyr_WaLOR_pollutant_retention_water_soluble_percent_thresholds_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "WaLOR_pollutant_retention_water_soluble_percent_thresholds",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WaLOR_pollutant_retention_water_soluble_percent_thresholds_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [69020.609876, 6854787.824860, 127833.179092, 6887260.110285]
                            })
                        });
var lyr_WaLOR_erosion_control_provision_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "WaLOR_erosion_control_provision",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WaLOR_erosion_control_provision_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [69020.609876, 6854787.824860, 127833.179092, 6887260.110285]
                            })
                        });
var lyr_WaLOR_flood_mitigation_provision_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "WaLOR_flood_mitigation_provision",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WaLOR_flood_mitigation_provision_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [69020.609876, 6854787.824860, 127833.179092, 6887260.110285]
                            })
                        });
var lyr_WaLOR_overall_provision_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "WaLOR_overall_provision",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WaLOR_overall_provision_14.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [69020.609876, 6854787.824860, 127833.179092, 6887260.110285]
                            })
                        });
var lyr_WaLOR_pollutant_retention_soil_adsorbed_provision_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "WaLOR_pollutant_retention_soil_adsorbed_provision",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WaLOR_pollutant_retention_soil_adsorbed_provision_15.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [69020.609876, 6854787.824860, 127833.179092, 6887260.110285]
                            })
                        });
var lyr_WaLOR_pollutant_retention_water_soluble_provision_16 = new ol.layer.Image({
                            opacity: 1,
                            title: "WaLOR_pollutant_retention_water_soluble_provision",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WaLOR_pollutant_retention_water_soluble_provision_16.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [69020.609876, 6854787.824860, 127833.179092, 6887260.110285]
                            })
                        });
var format_WaLORRoads_17 = new ol.format.GeoJSON();
var features_WaLORRoads_17 = format_WaLORRoads_17.readFeatures(json_WaLORRoads_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaLORRoads_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaLORRoads_17.addFeatures(features_WaLORRoads_17);
var lyr_WaLORRoads_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaLORRoads_17, 
                style: style_WaLORRoads_17,
                interactive: true,
                title: '<img src="styles/legend/WaLORRoads_17.png" /> WaLOR Roads'
            });
var format_WaLORPROW_18 = new ol.format.GeoJSON();
var features_WaLORPROW_18 = format_WaLORPROW_18.readFeatures(json_WaLORPROW_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaLORPROW_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaLORPROW_18.addFeatures(features_WaLORPROW_18);
var lyr_WaLORPROW_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaLORPROW_18, 
                style: style_WaLORPROW_18,
                interactive: true,
                title: '<img src="styles/legend/WaLORPROW_18.png" /> WaLOR PROW'
            });
var format_WaLORNorfolkFootpath_19 = new ol.format.GeoJSON();
var features_WaLORNorfolkFootpath_19 = format_WaLORNorfolkFootpath_19.readFeatures(json_WaLORNorfolkFootpath_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaLORNorfolkFootpath_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaLORNorfolkFootpath_19.addFeatures(features_WaLORNorfolkFootpath_19);
var lyr_WaLORNorfolkFootpath_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaLORNorfolkFootpath_19, 
                style: style_WaLORNorfolkFootpath_19,
                interactive: true,
                title: '<img src="styles/legend/WaLORNorfolkFootpath_19.png" /> WaLOR Norfolk Footpath'
            });
var format_WaLORNorfolkBywayRestricted_20 = new ol.format.GeoJSON();
var features_WaLORNorfolkBywayRestricted_20 = format_WaLORNorfolkBywayRestricted_20.readFeatures(json_WaLORNorfolkBywayRestricted_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaLORNorfolkBywayRestricted_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaLORNorfolkBywayRestricted_20.addFeatures(features_WaLORNorfolkBywayRestricted_20);
var lyr_WaLORNorfolkBywayRestricted_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaLORNorfolkBywayRestricted_20, 
                style: style_WaLORNorfolkBywayRestricted_20,
                interactive: true,
                title: '<img src="styles/legend/WaLORNorfolkBywayRestricted_20.png" /> WaLOR Norfolk Byway Restricted'
            });
var format_WaLORNorfolkBywayAllaccess_21 = new ol.format.GeoJSON();
var features_WaLORNorfolkBywayAllaccess_21 = format_WaLORNorfolkBywayAllaccess_21.readFeatures(json_WaLORNorfolkBywayAllaccess_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaLORNorfolkBywayAllaccess_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaLORNorfolkBywayAllaccess_21.addFeatures(features_WaLORNorfolkBywayAllaccess_21);
var lyr_WaLORNorfolkBywayAllaccess_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaLORNorfolkBywayAllaccess_21, 
                style: style_WaLORNorfolkBywayAllaccess_21,
                interactive: true,
                title: '<img src="styles/legend/WaLORNorfolkBywayAllaccess_21.png" /> WaLOR Norfolk Byway All access'
            });
var format_WaLORNorfolkBridleway_22 = new ol.format.GeoJSON();
var features_WaLORNorfolkBridleway_22 = format_WaLORNorfolkBridleway_22.readFeatures(json_WaLORNorfolkBridleway_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaLORNorfolkBridleway_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaLORNorfolkBridleway_22.addFeatures(features_WaLORNorfolkBridleway_22);
var lyr_WaLORNorfolkBridleway_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaLORNorfolkBridleway_22, 
                style: style_WaLORNorfolkBridleway_22,
                interactive: true,
                title: '<img src="styles/legend/WaLORNorfolkBridleway_22.png" /> WaLOR Norfolk Bridleway'
            });
var format_WaLORCROW_23 = new ol.format.GeoJSON();
var features_WaLORCROW_23 = format_WaLORCROW_23.readFeatures(json_WaLORCROW_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaLORCROW_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaLORCROW_23.addFeatures(features_WaLORCROW_23);
var lyr_WaLORCROW_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaLORCROW_23, 
                style: style_WaLORCROW_23,
                interactive: true,
                title: '<img src="styles/legend/WaLORCROW_23.png" /> WaLOR CROW'
            });
var format_RIVERS1_24 = new ol.format.GeoJSON();
var features_RIVERS1_24 = format_RIVERS1_24.readFeatures(json_RIVERS1_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RIVERS1_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIVERS1_24.addFeatures(features_RIVERS1_24);
var lyr_RIVERS1_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RIVERS1_24, 
                style: style_RIVERS1_24,
                interactive: true,
                title: '<img src="styles/legend/RIVERS1_24.png" /> RIVERS~1'
            });
var format_Hedgerowbaseline_Gaze_Ling_Jacobs_Aves_Huggins_Flatman_25 = new ol.format.GeoJSON();
var features_Hedgerowbaseline_Gaze_Ling_Jacobs_Aves_Huggins_Flatman_25 = format_Hedgerowbaseline_Gaze_Ling_Jacobs_Aves_Huggins_Flatman_25.readFeatures(json_Hedgerowbaseline_Gaze_Ling_Jacobs_Aves_Huggins_Flatman_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hedgerowbaseline_Gaze_Ling_Jacobs_Aves_Huggins_Flatman_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hedgerowbaseline_Gaze_Ling_Jacobs_Aves_Huggins_Flatman_25.addFeatures(features_Hedgerowbaseline_Gaze_Ling_Jacobs_Aves_Huggins_Flatman_25);
var lyr_Hedgerowbaseline_Gaze_Ling_Jacobs_Aves_Huggins_Flatman_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hedgerowbaseline_Gaze_Ling_Jacobs_Aves_Huggins_Flatman_25, 
                style: style_Hedgerowbaseline_Gaze_Ling_Jacobs_Aves_Huggins_Flatman_25,
                interactive: true,
                title: '<img src="styles/legend/Hedgerowbaseline_Gaze_Ling_Jacobs_Aves_Huggins_Flatman_25.png" /> Hedgerow baseline_Gaze_Ling_Jacobs_Aves_Huggins_Flatman'
            });
var format_HabitatsBaselinev1_26 = new ol.format.GeoJSON();
var features_HabitatsBaselinev1_26 = format_HabitatsBaselinev1_26.readFeatures(json_HabitatsBaselinev1_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HabitatsBaselinev1_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HabitatsBaselinev1_26.addFeatures(features_HabitatsBaselinev1_26);
var lyr_HabitatsBaselinev1_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HabitatsBaselinev1_26, 
                style: style_HabitatsBaselinev1_26,
                interactive: true,
    title: 'Habitats Baseline (v1)<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_0.png" /> g - grassland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_1.png" /> g1 - acid grassland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_2.png" /> g1a - lowland dry acid grassland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_3.png" /> g1b - upland acid grassland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_4.png" /> g1b5 - montane acid grasslands (H6150)<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_5.png" /> g1b6 - other upland acid grassland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_6.png" /> g1c - bracken<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_7.png" /> g2 - calcareous grassland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_8.png" /> g2a - lowland calcareous grassland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_9.png" /> g2b - upland calacareous grassland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_10.png" /> g3 - neutral grassland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_11.png" /> g3a - lowland meadows<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_12.png" /> g3b - upland hay meadows<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_13.png" /> g3c - other neutral grassland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_14.png" /> g3c5 - Arrhenatherum neutral grassland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_15.png" /> g3c6 - Lolium-Cynosurus neutral grassland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_16.png" /> g3c7 - Deschampsia neutral grassland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_17.png" /> g3c8 - Holcus-Juncus neutral grassland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_18.png" /> g4 - modified grassland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_19.png" /> w - woodland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_20.png" /> w1 - broadleaved mixed and yew woodland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_21.png" /> w1a - upland oakwood<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_22.png" /> w1b - upland mixed ashwoods<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_23.png" /> w1c - lowland beech and yew woodland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_24.png" /> w1d - wet woodland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_25.png" /> w1e - upland birchwoods<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_26.png" /> w1f - lowland mixed deciduous woodland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_27.png" /> w1g - other woodland-broadleaved<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_28.png" /> w1g6 - line of trees<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_29.png" /> w1h - other woodland mixed<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_30.png" /> w2 - coniferous woodland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_31.png" /> w2a - native pine woodlands<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_32.png" /> w2b - other scots pine woodland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_33.png" /> w2c - other coniferous woodland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_34.png" /> h - heathland and shrub<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_35.png" /> h1 - dwarf shrub heath<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_36.png" /> h1a - lowland heathland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_37.png" /> h1a5 - dry heaths, lowland (H4030)<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_38.png" /> h1a7 - wet heathland with cross-leaved heath, lowland (H4010)<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_39.png" /> h1b - upland heathland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_40.png" /> h1b5 - dry heaths, upland (H4030)<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_41.png" /> h1b6 - wet heathland with cross-leaved heath, upland (H4010)<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_42.png" /> h2 - hedgerow <br />\
    <img src="styles/legend/HabitatsBaselinev1_26_43.png" /> h2a - hedgerow (priority habitat)<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_44.png" /> h2b - other hedgerows<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_45.png" /> h3 - dense scrub<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_46.png" /> f - wetland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_47.png" /> f1 - bog<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_48.png" /> f1a - blanket bog<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_49.png" /> f1b - lowland raised bog<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_50.png" /> f2 - fen, marsh and swamp<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_51.png" /> f2a - lowland fens<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_52.png" /> f2d - aquatic marginal vegetation<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_53.png" /> f2e - reedbeds<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_54.png" /> c - cropland<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_55.png" /> c1 - arable and horticulture<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_56.png" /> c1a - arable field margins<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_57.png" /> c1b - temporary grass and clover leys<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_58.png" /> c1c - cereal crops<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_59.png" /> c1d - non-cereal crops<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_60.png" /> c1e - intensive orchards<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_61.png" /> c1f - horticulture<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_62.png" /> u - urban<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_63.png" /> u1 - built-up areas and gardens<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_64.png" /> u1a - open mosaic habitats on previously developed land<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_65.png" /> u1b - developed land. sealed surface<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_66.png" /> u1b5 - buildings<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_67.png" /> u1b6 - other developed land<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_68.png" /> u1c - artificial unvegetated unsealed surface<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_69.png" /> u1d - suburban mosaic of developed/natural surface<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_70.png" /> u1e - built linear features<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_71.png" /> s - sparsely vegetated land<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_72.png" /> s1 - inland rock<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_73.png" /> s1a -  inland rock and scree habitats<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_74.png" /> s1d - other inland rock and scree<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_75.png" /> s2 - supralittoral rock<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_76.png" /> s2a - maritime cliff and slopes<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_77.png" /> s3 - supralittoral sediment<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_78.png" /> s3a - coastal sand dunes<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_79.png" /> s3b - coastal vegetated shingle<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_80.png" /> r - rivers and lakes<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_81.png" /> r1 - standing open water and canals<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_82.png" /> r1a - eutrophic standing waters<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_83.png" /> r1e - canals<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_84.png" /> r2 - rivers and streams<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_85.png" /> t - marine inlets and transitional waters<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_86.png" /> t1 - littoral rock<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_87.png" /> t2 - littoral sediment<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_88.png" /> t2a - coastal saltmarsh<br />\
    <img src="styles/legend/HabitatsBaselinev1_26_89.png" /> t2d - intertidal mudflats<br />'
        });

        var lyr_OpenStreetMap_27 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_28 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_29 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Projectareafromwatersheds_30 = new ol.format.GeoJSON();
var features_Projectareafromwatersheds_30 = format_Projectareafromwatersheds_30.readFeatures(json_Projectareafromwatersheds_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Projectareafromwatersheds_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projectareafromwatersheds_30.addFeatures(features_Projectareafromwatersheds_30);
var lyr_Projectareafromwatersheds_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Projectareafromwatersheds_30, 
                style: style_Projectareafromwatersheds_30,
                interactive: true,
                title: '<img src="styles/legend/Projectareafromwatersheds_30.png" /> Project area from watersheds'
            });
var format_EAFloodRiskModelData_31 = new ol.format.GeoJSON();
var features_EAFloodRiskModelData_31 = format_EAFloodRiskModelData_31.readFeatures(json_EAFloodRiskModelData_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EAFloodRiskModelData_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EAFloodRiskModelData_31.addFeatures(features_EAFloodRiskModelData_31);
var lyr_EAFloodRiskModelData_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EAFloodRiskModelData_31, 
                style: style_EAFloodRiskModelData_31,
                interactive: true,
    title: 'EA Flood Risk Model Data<br />\
    <img src="styles/legend/EAFloodRiskModelData_31_0.png" /> High<br />\
    <img src="styles/legend/EAFloodRiskModelData_31_1.png" /> Medium<br />\
    <img src="styles/legend/EAFloodRiskModelData_31_2.png" /> Low<br />\
    <img src="styles/legend/EAFloodRiskModelData_31_3.png" /> Very Low<br />\
    <img src="styles/legend/EAFloodRiskModelData_31_4.png" /> <br />'
        });
var format_ProjectParcels_32 = new ol.format.GeoJSON();
var features_ProjectParcels_32 = format_ProjectParcels_32.readFeatures(json_ProjectParcels_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectParcels_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectParcels_32.addFeatures(features_ProjectParcels_32);
var lyr_ProjectParcels_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProjectParcels_32, 
                style: style_ProjectParcels_32,
                interactive: true,
                title: '<img src="styles/legend/ProjectParcels_32.png" /> Project Parcels'
            });
var format_WilderCarbonWoodland_33 = new ol.format.GeoJSON();
var features_WilderCarbonWoodland_33 = format_WilderCarbonWoodland_33.readFeatures(json_WilderCarbonWoodland_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilderCarbonWoodland_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilderCarbonWoodland_33.addFeatures(features_WilderCarbonWoodland_33);
var lyr_WilderCarbonWoodland_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WilderCarbonWoodland_33, 
                style: style_WilderCarbonWoodland_33,
                interactive: true,
    title: 'Wilder Carbon Woodland<br />\
    <img src="styles/legend/WilderCarbonWoodland_33_0.png" /> Broadleaved Woodland<br />\
    <img src="styles/legend/WilderCarbonWoodland_33_1.png" /> Enhance Scrub Habitat<br />\
    <img src="styles/legend/WilderCarbonWoodland_33_2.png" /> Enhance Woodland Habitat<br />\
    <img src="styles/legend/WilderCarbonWoodland_33_3.png" /> Mixed Scrub<br />\
    <img src="styles/legend/WilderCarbonWoodland_33_4.png" /> <br />'
        });
var group_HummingbirdGroupBaselines = new ol.layer.Group({
                                layers: [lyr_RIVERS1_24,lyr_Hedgerowbaseline_Gaze_Ling_Jacobs_Aves_Huggins_Flatman_25,lyr_HabitatsBaselinev1_26,],
                                title: "Hummingbird Group Baselines"});
var group_WaLORAccessibility = new ol.layer.Group({
                                layers: [lyr_WaLORRoads_17,lyr_WaLORPROW_18,lyr_WaLORNorfolkFootpath_19,lyr_WaLORNorfolkBywayRestricted_20,lyr_WaLORNorfolkBywayAllaccess_21,lyr_WaLORNorfolkBridleway_22,lyr_WaLORCROW_23,],
                                title: "WaLOR Accessibility"});
var group_ViridianBaselineProvision = new ol.layer.Group({
                                layers: [lyr_WaLOR_erosion_control_provision_12,lyr_WaLOR_flood_mitigation_provision_13,lyr_WaLOR_overall_provision_14,lyr_WaLOR_pollutant_retention_soil_adsorbed_provision_15,lyr_WaLOR_pollutant_retention_water_soluble_provision_16,],
                                title: "Viridian Baseline Provision "});
var group_ViridianSolutionProvision = new ol.layer.Group({
                                layers: [lyr_WaLOR_erosion_control_percent_thresholds_7,lyr_WaLOR_flood_mitigation_percent_thresholds_8,lyr_WaLOR_overall_percent_thresholds_9,lyr_WaLOR_pollutant_retention_soil_adsorbed_percent_thresholds_10,lyr_WaLOR_pollutant_retention_water_soluble_percent_thresholds_11,],
                                title: "Viridian Solution Provision "});
var group_ViridianSurfaceandFlooding = new ol.layer.Group({
                                layers: [lyr_WaLOR_flood_mitigation_surface_flow_indicator_5,lyr_WaLOR_surface_depressions_6,],
                                title: "Viridian Surface and Flooding"});
var group_ViridianTargetOptions = new ol.layer.Group({
                                layers: [lyr_WaLOR_pollutant_retention_water_soluble_0,lyr_WaLOR_pollutant_retention_soil_adsorbed_1,lyr_WaLOR_flood_mitigation_2,lyr_WaLOR_erosion_control_3,lyr_WaLOR_overall_4,],
                                title: "Viridian Target Options"});

lyr_WaLOR_pollutant_retention_water_soluble_0.setVisible(true);lyr_WaLOR_pollutant_retention_soil_adsorbed_1.setVisible(true);lyr_WaLOR_flood_mitigation_2.setVisible(true);lyr_WaLOR_erosion_control_3.setVisible(true);lyr_WaLOR_overall_4.setVisible(true);lyr_WaLOR_flood_mitigation_surface_flow_indicator_5.setVisible(true);lyr_WaLOR_surface_depressions_6.setVisible(true);lyr_WaLOR_erosion_control_percent_thresholds_7.setVisible(true);lyr_WaLOR_flood_mitigation_percent_thresholds_8.setVisible(true);lyr_WaLOR_overall_percent_thresholds_9.setVisible(true);lyr_WaLOR_pollutant_retention_soil_adsorbed_percent_thresholds_10.setVisible(true);lyr_WaLOR_pollutant_retention_water_soluble_percent_thresholds_11.setVisible(true);lyr_WaLOR_erosion_control_provision_12.setVisible(true);lyr_WaLOR_flood_mitigation_provision_13.setVisible(true);lyr_WaLOR_overall_provision_14.setVisible(true);lyr_WaLOR_pollutant_retention_soil_adsorbed_provision_15.setVisible(true);lyr_WaLOR_pollutant_retention_water_soluble_provision_16.setVisible(true);lyr_WaLORRoads_17.setVisible(true);lyr_WaLORPROW_18.setVisible(true);lyr_WaLORNorfolkFootpath_19.setVisible(true);lyr_WaLORNorfolkBywayRestricted_20.setVisible(true);lyr_WaLORNorfolkBywayAllaccess_21.setVisible(true);lyr_WaLORNorfolkBridleway_22.setVisible(true);lyr_WaLORCROW_23.setVisible(true);lyr_RIVERS1_24.setVisible(true);lyr_Hedgerowbaseline_Gaze_Ling_Jacobs_Aves_Huggins_Flatman_25.setVisible(true);lyr_HabitatsBaselinev1_26.setVisible(true);lyr_OpenStreetMap_27.setVisible(true);lyr_OpenStreetMap_28.setVisible(true);lyr_OSMStandard_29.setVisible(true);lyr_Projectareafromwatersheds_30.setVisible(true);lyr_EAFloodRiskModelData_31.setVisible(true);lyr_ProjectParcels_32.setVisible(true);lyr_WilderCarbonWoodland_33.setVisible(true);
var layersList = [group_ViridianTargetOptions,group_ViridianSurfaceandFlooding,group_ViridianSolutionProvision,group_ViridianBaselineProvision,group_WaLORAccessibility,group_HummingbirdGroupBaselines,lyr_OpenStreetMap_27,lyr_OpenStreetMap_28,lyr_OSMStandard_29,lyr_Projectareafromwatersheds_30,lyr_EAFloodRiskModelData_31,lyr_ProjectParcels_32,lyr_WilderCarbonWoodland_33];
lyr_WaLOR_pollutant_retention_water_soluble_0.set('fieldAliases', {'fid': 'fid', 'habitat_idx': 'habitat_idx', 'habitat_name': 'habitat_name', 'threshold_min': 'threshold_min', 'threshold_max': 'threshold_max', });
lyr_WaLOR_pollutant_retention_soil_adsorbed_1.set('fieldAliases', {'fid': 'fid', 'habitat_idx': 'habitat_idx', 'habitat_name': 'habitat_name', 'threshold_min': 'threshold_min', 'threshold_max': 'threshold_max', });
lyr_WaLOR_flood_mitigation_2.set('fieldAliases', {'fid': 'fid', 'habitat_idx': 'habitat_idx', 'habitat_name': 'habitat_name', 'threshold_min': 'threshold_min', 'threshold_max': 'threshold_max', });
lyr_WaLOR_erosion_control_3.set('fieldAliases', {'fid': 'fid', 'habitat_idx': 'habitat_idx', 'habitat_name': 'habitat_name', 'threshold_min': 'threshold_min', 'threshold_max': 'threshold_max', });
lyr_WaLOR_overall_4.set('fieldAliases', {'fid': 'fid', 'habitat_idx': 'habitat_idx', 'habitat_name': 'habitat_name', 'threshold_min': 'threshold_min', 'threshold_max': 'threshold_max', });
lyr_WaLORRoads_17.set('fieldAliases', {'fid': 'fid', 'fictitious': 'fictitious', 'identifier': 'identifier', 'class': 'class', 'roadNumber': 'roadNumber', 'name1': 'name1', 'name1_lang': 'name1_lang', 'name2': 'name2', 'name2_lang': 'name2_lang', 'formOfWay': 'formOfWay', 'length': 'length', 'primary': 'primary', 'trunkRoad': 'trunkRoad', 'loop': 'loop', 'startNode': 'startNode', 'endNode': 'endNode', 'structure': 'structure', 'nameTOID': 'nameTOID', 'numberTOID': 'numberTOID', 'function': 'function', 'layer': 'layer', 'path': 'path', });
lyr_WaLORPROW_18.set('fieldAliases', {'fid': 'fid', 'PROW_ID': 'PROW_ID', 'ROUTECODE': 'ROUTECODE', 'STATUS': 'STATUS', });
lyr_WaLORNorfolkFootpath_19.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_WaLORNorfolkBywayRestricted_20.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_WaLORNorfolkBywayAllaccess_21.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_WaLORNorfolkBridleway_22.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_WaLORCROW_23.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Descrip': 'Descrip', 'OC': 'OC', 'RCL': 'RCL', 'S16': 'S16', 'Map_Area': 'Map_Area', 'Version': 'Version', 'Shape_Leng': 'Shape_Leng', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RIVERS1_24.set('fieldAliases', {'fid': 'fid', 'Parcel Ref': 'Parcel Ref', 'Baseline R': 'Baseline R', 'Baseline C': 'Baseline C', 'Baseline S': 'Baseline S', 'Baseline E': 'Baseline E', 'Baseline_1': 'Baseline_1', 'Retention': 'Retention', 'Proposed R': 'Proposed R', 'Proposed C': 'Proposed C', 'Proposed S': 'Proposed S', 'Length': 'Length', 'Habitat cr': 'Habitat cr', 'Delay in s': 'Delay in s', 'Spatial ri': 'Spatial ri', 'Location': 'Location', 'Proposed E': 'Proposed E', 'Proposed_1': 'Proposed_1', 'Site Name': 'Site Name', 'Survey Dat': 'Survey Dat', 'Survey Det': 'Survey Det', 'Comments': 'Comments', 'Mapped by': 'Mapped by', 'Company': 'Company', 'Base Map': 'Base Map', 'Enhancemen': 'Enhancemen', 'Rivers Fix': 'Rivers Fix', 'Rivers F_1': 'Rivers F_1', 'Rivers F_2': 'Rivers F_2', 'Rivers F_3': 'Rivers F_3', });
lyr_Hedgerowbaseline_Gaze_Ling_Jacobs_Aves_Huggins_Flatman_25.set('fieldAliases', {'fid': 'fid', 'Parcel Ref': 'Parcel Ref', 'Baseline H': 'Baseline H', 'Baseline C': 'Baseline C', 'Baseline S': 'Baseline S', 'Retention': 'Retention', 'Proposed H': 'Proposed H', 'Proposed C': 'Proposed C', 'Proposed S': 'Proposed S', 'Length': 'Length', 'Habitat cr': 'Habitat cr', 'Delay in s': 'Delay in s', 'Spatial ri': 'Spatial ri', 'Location': 'Location', 'Site Name': 'Site Name', 'Survey Dat': 'Survey Dat', 'Survey Det': 'Survey Det', 'Comments': 'Comments', 'Mapped by': 'Mapped by', 'Company': 'Company', 'Base Map': 'Base Map', 'Hedgerow F': 'Hedgerow F', 'Hedgerow_1': 'Hedgerow_1', 'Hedgerow_2': 'Hedgerow_2', 'Hedgerow_3': 'Hedgerow_3', });
lyr_HabitatsBaselinev1_26.set('fieldAliases', {'fid': 'fid', 'Parcel Ref': 'Parcel Ref', 'Baseline B': 'Baseline B', 'Baseline H': 'Baseline H', 'Area': 'Area', 'Baseline C': 'Baseline C', 'Baseline S': 'Baseline S', 'Retention': 'Retention', 'Proposed B': 'Proposed B', 'Proposed H': 'Proposed H', 'Proposed C': 'Proposed C', 'Proposed S': 'Proposed S', 'Habitat cr': 'Habitat cr', 'Delay in s': 'Delay in s', 'Spatial ri': 'Spatial ri', 'Location': 'Location', 'Site Name': 'Site Name', 'Survey Dat': 'Survey Dat', 'Survey Det': 'Survey Det', 'Comment': 'Comment', 'Mapped by': 'Mapped by', 'Company': 'Company', 'Base Map': 'Base Map', 'Habitat Fi': 'Habitat Fi', 'Habitat _1': 'Habitat _1', 'Habitat _2': 'Habitat _2', 'Habitat _3': 'Habitat _3', 'Habitat re': 'Habitat re', });
lyr_Projectareafromwatersheds_30.set('fieldAliases', {'id': 'id', });
lyr_EAFloodRiskModelData_31.set('fieldAliases', {'fid': 'fid', 'prob_4band': 'prob_4band', 'suitabilit': 'suitabilit', 'pub_date': 'pub_date', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_ProjectParcels_32.set('fieldAliases', {'id': 'id', 'sheetId': 'sheetId', 'parcelId': 'parcelId', 'sbi': 'sbi', 'land_cover': 'land_cover', 'descriptio': 'descriptio', 'lfa_code': 'lfa_code', 'area': 'area', 'perimeter': 'perimeter', 'Add': 'Add', 'Name': 'Name', 'laStyleTyp': 'laStyleTyp', 'laStyle': 'laStyle', });
lyr_WilderCarbonWoodland_33.set('fieldAliases', {'fid': 'fid', 'HabType': 'HabType', 'Name': 'Name', 'UK.Hab.Cod': 'UK.Hab.Cod', 'mode': 'mode', 'Post_Hab': 'Post_Hab', 'Area_ha': 'Area_ha', });
lyr_WaLOR_pollutant_retention_water_soluble_0.set('fieldImages', {'fid': 'TextEdit', 'habitat_idx': 'TextEdit', 'habitat_name': 'TextEdit', 'threshold_min': 'TextEdit', 'threshold_max': 'TextEdit', });
lyr_WaLOR_pollutant_retention_soil_adsorbed_1.set('fieldImages', {'fid': '', 'habitat_idx': '', 'habitat_name': '', 'threshold_min': '', 'threshold_max': '', });
lyr_WaLOR_flood_mitigation_2.set('fieldImages', {'fid': '', 'habitat_idx': '', 'habitat_name': '', 'threshold_min': '', 'threshold_max': '', });
lyr_WaLOR_erosion_control_3.set('fieldImages', {'fid': '', 'habitat_idx': '', 'habitat_name': '', 'threshold_min': '', 'threshold_max': '', });
lyr_WaLOR_overall_4.set('fieldImages', {'fid': '', 'habitat_idx': '', 'habitat_name': '', 'threshold_min': '', 'threshold_max': '', });
lyr_WaLORRoads_17.set('fieldImages', {'fid': '', 'fictitious': '', 'identifier': '', 'class': '', 'roadNumber': '', 'name1': '', 'name1_lang': '', 'name2': '', 'name2_lang': '', 'formOfWay': '', 'length': '', 'primary': '', 'trunkRoad': '', 'loop': '', 'startNode': '', 'endNode': '', 'structure': '', 'nameTOID': '', 'numberTOID': '', 'function': '', 'layer': '', 'path': '', });
lyr_WaLORPROW_18.set('fieldImages', {'fid': '', 'PROW_ID': '', 'ROUTECODE': '', 'STATUS': '', });
lyr_WaLORNorfolkFootpath_19.set('fieldImages', {'fid': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_WaLORNorfolkBywayRestricted_20.set('fieldImages', {'fid': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_WaLORNorfolkBywayAllaccess_21.set('fieldImages', {'fid': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_WaLORNorfolkBridleway_22.set('fieldImages', {'fid': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_WaLORCROW_23.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Descrip': 'TextEdit', 'OC': 'TextEdit', 'RCL': 'TextEdit', 'S16': 'TextEdit', 'Map_Area': 'TextEdit', 'Version': 'TextEdit', 'Shape_Leng': 'TextEdit', 'SHAPE_Le_1': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_RIVERS1_24.set('fieldImages', {'fid': '', 'Parcel Ref': '', 'Baseline R': '', 'Baseline C': '', 'Baseline S': '', 'Baseline E': '', 'Baseline_1': '', 'Retention': '', 'Proposed R': '', 'Proposed C': '', 'Proposed S': '', 'Length': '', 'Habitat cr': '', 'Delay in s': '', 'Spatial ri': '', 'Location': '', 'Proposed E': '', 'Proposed_1': '', 'Site Name': '', 'Survey Dat': '', 'Survey Det': '', 'Comments': '', 'Mapped by': '', 'Company': '', 'Base Map': '', 'Enhancemen': '', 'Rivers Fix': '', 'Rivers F_1': '', 'Rivers F_2': '', 'Rivers F_3': '', });
lyr_Hedgerowbaseline_Gaze_Ling_Jacobs_Aves_Huggins_Flatman_25.set('fieldImages', {'fid': '', 'Parcel Ref': '', 'Baseline H': '', 'Baseline C': '', 'Baseline S': '', 'Retention': '', 'Proposed H': '', 'Proposed C': '', 'Proposed S': '', 'Length': '', 'Habitat cr': '', 'Delay in s': '', 'Spatial ri': '', 'Location': '', 'Site Name': '', 'Survey Dat': '', 'Survey Det': '', 'Comments': '', 'Mapped by': '', 'Company': '', 'Base Map': '', 'Hedgerow F': '', 'Hedgerow_1': '', 'Hedgerow_2': '', 'Hedgerow_3': '', });
lyr_HabitatsBaselinev1_26.set('fieldImages', {'fid': 'TextEdit', 'Parcel Ref': 'TextEdit', 'Baseline B': 'TextEdit', 'Baseline H': 'TextEdit', 'Area': 'Range', 'Baseline C': 'TextEdit', 'Baseline S': 'TextEdit', 'Retention': 'TextEdit', 'Proposed B': 'TextEdit', 'Proposed H': 'TextEdit', 'Proposed C': 'TextEdit', 'Proposed S': 'TextEdit', 'Habitat cr': 'TextEdit', 'Delay in s': 'TextEdit', 'Spatial ri': 'TextEdit', 'Location': 'TextEdit', 'Site Name': 'TextEdit', 'Survey Dat': 'DateTime', 'Survey Det': 'TextEdit', 'Comment': 'TextEdit', 'Mapped by': 'TextEdit', 'Company': 'TextEdit', 'Base Map': 'TextEdit', 'Habitat Fi': 'TextEdit', 'Habitat _1': 'TextEdit', 'Habitat _2': 'TextEdit', 'Habitat _3': 'TextEdit', 'Habitat re': 'TextEdit', });
lyr_Projectareafromwatersheds_30.set('fieldImages', {'id': 'TextEdit', });
lyr_EAFloodRiskModelData_31.set('fieldImages', {'fid': 'TextEdit', 'prob_4band': 'TextEdit', 'suitabilit': 'TextEdit', 'pub_date': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_ProjectParcels_32.set('fieldImages', {'id': 'TextEdit', 'sheetId': 'TextEdit', 'parcelId': 'TextEdit', 'sbi': 'Range', 'land_cover': 'TextEdit', 'descriptio': 'TextEdit', 'lfa_code': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'Add': 'TextEdit', 'Name': 'TextEdit', 'laStyleTyp': 'TextEdit', 'laStyle': 'TextEdit', });
lyr_WilderCarbonWoodland_33.set('fieldImages', {'fid': 'TextEdit', 'HabType': 'TextEdit', 'Name': 'TextEdit', 'UK.Hab.Cod': 'TextEdit', 'mode': 'TextEdit', 'Post_Hab': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_WaLOR_pollutant_retention_water_soluble_0.set('fieldLabels', {});
lyr_WaLOR_pollutant_retention_soil_adsorbed_1.set('fieldLabels', {});
lyr_WaLOR_flood_mitigation_2.set('fieldLabels', {});
lyr_WaLOR_erosion_control_3.set('fieldLabels', {});
lyr_WaLOR_overall_4.set('fieldLabels', {});
lyr_WaLORRoads_17.set('fieldLabels', {});
lyr_WaLORPROW_18.set('fieldLabels', {});
lyr_WaLORNorfolkFootpath_19.set('fieldLabels', {});
lyr_WaLORNorfolkBywayRestricted_20.set('fieldLabels', {});
lyr_WaLORNorfolkBywayAllaccess_21.set('fieldLabels', {});
lyr_WaLORNorfolkBridleway_22.set('fieldLabels', {});
lyr_WaLORCROW_23.set('fieldLabels', {});
lyr_RIVERS1_24.set('fieldLabels', {});
lyr_Hedgerowbaseline_Gaze_Ling_Jacobs_Aves_Huggins_Flatman_25.set('fieldLabels', {});
lyr_HabitatsBaselinev1_26.set('fieldLabels', {});
lyr_Projectareafromwatersheds_30.set('fieldLabels', {'id': 'no label', });
lyr_EAFloodRiskModelData_31.set('fieldLabels', {'fid': 'no label', 'prob_4band': 'no label', 'suitabilit': 'no label', 'pub_date': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_ProjectParcels_32.set('fieldLabels', {'id': 'no label', 'sheetId': 'no label', 'parcelId': 'no label', 'sbi': 'no label', 'land_cover': 'no label', 'descriptio': 'no label', 'lfa_code': 'no label', 'area': 'no label', 'perimeter': 'no label', 'Add': 'no label', 'Name': 'no label', 'laStyleTyp': 'no label', 'laStyle': 'no label', });
lyr_WilderCarbonWoodland_33.set('fieldLabels', {'fid': 'no label', 'HabType': 'no label', 'Name': 'no label', 'UK.Hab.Cod': 'no label', 'mode': 'no label', 'Post_Hab': 'no label', 'Area_ha': 'no label', });
lyr_WilderCarbonWoodland_33.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});