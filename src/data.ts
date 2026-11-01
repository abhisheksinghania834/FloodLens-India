export type District = {name:string;state:string;lat:number;lng:number;exposure:number;river:string;note:string};
 // Illustrative demo indicators for UI testing only; not measured or official district risk scores.
export const districts: District[] = [
{name:'Patna',state:'Bihar',lat:25.5941,lng:85.1376,exposure:82,river:'Ganga',note:'Low-lying areas near the Ganga and its tributaries require local verification.'},
{name:'Khagaria',state:'Bihar',lat:25.5022,lng:86.4671,exposure:91,river:'Kosi / Ganga system',note:'Confluence-region geography makes floodplain awareness important.'},
{name:'Darbhanga',state:'Bihar',lat:26.1542,lng:85.8918,exposure:87,river:'Bagmati system',note:'Historical waterlogging and riverine exposure should be examined at finer scale.'},
{name:'Bhagalpur',state:'Bihar',lat:25.2425,lng:86.9842,exposure:74,river:'Ganga',note:'River corridor and low-lying settlements need careful local planning.'},
{name:'Muzaffarpur',state:'Bihar',lat:26.1209,lng:85.3647,exposure:76,river:'Burhi Gandak',note:'Tributary systems can contribute to seasonal inundation.'},
{name:'Guwahati',state:'Assam',lat:26.1445,lng:91.7362,exposure:79,river:'Brahmaputra',note:'Riverine and urban drainage contexts should be distinguished.'},
{name:'Dibrugarh',state:'Assam',lat:27.4728,lng:94.9120,exposure:88,river:'Brahmaputra',note:'Large river dynamics and erosion are relevant regional concerns.'},
{name:'Kochi',state:'Kerala',lat:9.9312,lng:76.2673,exposure:61,river:'Periyar basin',note:'Coastal, tidal and river flooding are distinct hazards.'},
{name:'Cuttack',state:'Odisha',lat:20.4625,lng:85.8830,exposure:69,river:'Mahanadi',note:'Deltaic river branches and drainage patterns shape exposure.'},
{name:'Varanasi',state:'Uttar Pradesh',lat:25.3176,lng:82.9739,exposure:58,river:'Ganga',note:'Seasonal river levels affect riverfront areas.'}
];
export const facilities = [
{name:'AIIMS Patna',type:'Hospital',lat:25.5658,lng:85.0880},{name:'Patna Medical College',type:'Hospital',lat:25.6205,lng:85.1602},{name:'Darbhanga Medical College',type:'Hospital',lat:26.1220,lng:85.8970},{name:'Bhagalpur Medical College',type:'Hospital',lat:25.2520,lng:86.9890},{name:'Gauhati Medical College',type:'Hospital',lat:26.1580,lng:91.7710},{name:'SCB Medical College',type:'Hospital',lat:20.4690,lng:85.8790}
];
export const rivers = [
{name:'Ganga (illustrative trace)',positions:[[25.25,83.0],[25.32,83.5],[25.45,84.0],[25.55,84.6],[25.62,85.0],[25.52,85.6],[25.38,86.2],[25.25,87.0]] as [number,number][]},
{name:'Brahmaputra (illustrative trace)',positions:[[26.15,90.0],[26.20,90.7],[26.25,91.3],[26.35,92.0],[26.65,93.0],[27.0,94.0]] as [number,number][]}
];