/**
<table class="table-responsive">
    <caption class="t-above"><span class="table-number">Table 1:</span> Modules of the Transmodel Ontology</caption>
    <thead class="text-center redbg">
        <tr class="text-center">
            <th scope="col">colName</th>
        </tr>
    </thead>
    <tbody>
            <tr>
                    <td nowrap><a href="vocLink">vocabulary</a></td>
                    <td nowrap><span class="timestamp-wrapper"><span class="timestamp">ReleaseDate</span></span></td>
                    <td nowrap>Prefix</td>
                    <td nowrap>Serialisation</td>
                    <td nowrap><a href="https://creativecommons.org/licenses/by/4.0/">Licence</a></td>
                    <td nowrap>Lang</td>
                    <td nowrap>Domain</td>
                    <td nowrap>Links</td>
                    <td>Description</td>
            </tr>
    </tbody>
</table>
**/

let table1 = [
  {
    "Vocabulary": "<a href=\"./tm-commons.owl/documentation/index-en.html\">Commons</a>",
    "ReleaseDate": "2019-11-28 Thu",
    "Prefix": "tmcommons",
    "Serialisation": "rdf+xml <br>html <br>turtle",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "transit",
    "Links": "<a href=\"https://github.com/oeg-upm/transmodel-ontology/blob/master/ontology/tm-commons.owl\"><img src=\"./icons/repo.svg\" class=\"icon\">repository</a><br><a href=\"https://github.com/oeg-upm/transmodel-ontology/labels/commons\"><img src=\"./icons/issue-opened.svg\" class=\"icon\">issues</a><br><a href=\"https://github.com/oeg-upm/transmodel-ontology/wiki/competency-questions\"><img src=\"./icons/tasklist.svg\" class=\"icon\">requirements</a><br><a href=\"https://github.com/oeg-upm/transmodel-ontology/releases\"><img src=\"./icons/tag.svg\" class=\"icon\">releases</a>",
    "Description": "Commons module (prefix tmcommons, <a href=\"https://w3id.org/transmodel/commons\">https://w3id.org/transmodel/commons</a>#) to represent all those concepts and properties that are general enough to be used across all modules."
  },
  {
    "Vocabulary": "<a href=\"./tm-facilities.owl/documentation/index-en.html\">Facilities</a>",
    "ReleaseDate": "2019-11-28 Thu",
    "Prefix": "tmfac",
    "Serialisation": "rdf+xml <br>html <br>turtle",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "facilities",
    "Links": "<a href=\"https://github.com/oeg-upm/transmodel-ontology/blob/master/ontology/tm-facilities.owl\"><img src=\"./icons/repo.svg\" class=\"icon\">repository</a><br><a href=\"https://github.com/oeg-upm/transmodel-ontology/labels/facilities\"><img src=\"./icons/issue-opened.svg\" class=\"icon\">issues</a><br><a href=\"https://github.com/oeg-upm/transmodel-ontology/wiki/competency-questions\"><img src=\"./icons/tasklist.svg\" class=\"icon\">requirements</a><br><a href=\"https://github.com/oeg-upm/transmodel-ontology/releases\"><img src=\"./icons/tag.svg\" class=\"icon\">releases</a>",
    "Description": "Facilities module (prefix tmfac, <a href=\"https://w3id.org/transmodel/facilities\">https://w3id.org/transmodel/facilities</a>#) to represent all the information related to facilities."
  },
  {
    "Vocabulary": "<a href=\"./tm-fares.owl/documentation/index-en.html\">Fares</a>",
    "ReleaseDate": "2019-11-28 Thu",
    "Prefix": "tmfares",
    "Serialisation": "rdf+xml <br>html <br>turtle",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "fares",
    "Links": "<a href=\"https://github.com/oeg-upm/transmodel-ontology/blob/master/ontology/tm-fares.owl\"><img src=\"./icons/repo.svg\" class=\"icon\">repository</a><br><a href=\"https://github.com/oeg-upm/transmodel-ontology/labels/fares\"><img src=\"./icons/issue-opened.svg\" class=\"icon\">issues</a><br><a href=\"https://github.com/oeg-upm/transmodel-ontology/wiki/competency-questions\"><img src=\"./icons/tasklist.svg\" class=\"icon\">requirements</a><br><a href=\"https://github.com/oeg-upm/transmodel-ontology/releases\"><img src=\"./icons/tag.svg\" class=\"icon\">releases</a>",
<<<<<<< HEAD
    "Description": "Organisations module (prefix tmfares, <a href=\"https://w3id.org/transmodel/fares\">https://w3id.org/transmodel/fares#</a>) to represent all the information related to the public transport organisations."
=======
    "Description": "Organisations module (prefix tmorg, <a href=\"https://w3id.org/transmodel/organisations\">https://w3id.org/transmodel/organisations</a>#) to represent all the information related to the public transport organisations."
>>>>>>> parent of 5d4e997... some missing files removed
  },
  {
    "Vocabulary": "<a href=\"./tm-journeys.owl/documentation/index-en.html\">Journeys</a>",
    "ReleaseDate": "2019-11-28 Thu",
    "Prefix": "tmjourney",
    "Serialisation": "rdf+xml <br>html <br>turtle",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "journeys",
    "Links": "<a href=\"https://github.com/oeg-upm/transmodel-ontology/blob/master/ontology/tm-journeys.owl\"><img src=\"./icons/repo.svg\" class=\"icon\">repository</a><br><a href=\"https://github.com/oeg-upm/transmodel-ontology/labels/journeys\"><img src=\"./icons/issue-opened.svg\" class=\"icon\">issues</a><br><a href=\"https://github.com/oeg-upm/transmodel-ontology/wiki/competency-questions\"><img src=\"./icons/tasklist.svg\" class=\"icon\">requirements</a><br><a href=\"https://github.com/oeg-upm/transmodel-ontology/releases\"><img src=\"./icons/tag.svg\" class=\"icon\">releases</a>",
    "Description": "Journeys module (prefix tmjourney, <a href=\"https://w3id.org/transmodel/journeys\">https://w3id.org/transmodel/journeys</a>#) to represent all the information related to the trips and the different types of journeys for passengers and vehicles."
  },
  {
    "Vocabulary": "<a href=\"./tm-organisations.owl/documentation/index-en.html\">Organisations</a>",
    "ReleaseDate": "2019-11-28 Thu",
    "Prefix": "tmorg",
    "Serialisation": "rdf+xml <br>html <br>turtle",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "organisations",
    "Links": "<a href=\"https://github.com/oeg-upm/transmodel-ontology/blob/master/ontology/tm-org.owl\"><img src=\"./icons/repo.svg\" class=\"icon\">repository</a><br><a href=\"https://github.com/oeg-upm/transmodel-ontology/labels/organisations\"><img src=\"./icons/issue-opened.svg\" class=\"icon\">issues</a><br><a href=\"https://github.com/oeg-upm/transmodel-ontology/wiki/competency-questions\"><img src=\"./icons/tasklist.svg\" class=\"icon\">requirements</a><br><a href=\"https://github.com/oeg-upm/transmodel-ontology/releases\"><img src=\"./icons/tag.svg\" class=\"icon\">releases</a>",
    "Description": "Organisations module (prefix tmorg, <a href=\"https://w3id.org/transmodel/organisations\">https://w3id.org/transmodel/organisations</a>#) to represent all the information related to the public transport organisations."
  }
 ]
 let table2 = [
  {
    "SKOSList": "all-modes",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "commons",
    "isUsedInVocab": "commons",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/commons/all-modes.ttl\">all-modes.ttl</a>",
    "Description": "Allowed values for Vehicle Mode"
  },
  {
    "SKOSList": "continuous-mode",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "commons",
    "isUsedInVocab": "commons",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/commons/continuous-mode.ttl\">continuous-mode.ttl</a>",
    "Description": "Allowed values for Continuous Mode"
  },
  {
    "SKOSList": "road-vehicle-mode",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "commons",
    "isUsedInVocab": "commons",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/commons/road-vehicle-mode.ttl\">road-vehicle-mode.ttl</a>",
    "Description": "Allowed values for Road Vehicle Mode"
  },
  {
    "SKOSList": "sites-access-mode",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "commons",
    "isUsedInVocab": "commons",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/commons/sites-access-mode.ttl\">sites-access-mode.ttl</a>",
    "Description": "Allowed values for Site Access Mode"
  },
  {
    "SKOSList": "vehicle-mode",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "commons",
    "isUsedInVocab": "commons",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/commons/vehicle-mode.ttl\">vehicle-mode.ttl</a>",
    "Description": "Allowed values for modes of Public Transport applicable to timetabled public transport"
  },
  {
    "SKOSList": "facilities.ttl",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "facilities",
    "isUsedInVocab": "facilities",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/facilities.ttl\">facilities.ttl</a>",
    "Description": "Codelist of types of facilities"
  },
  {
    "SKOSList": "organisation-type.ttl",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "organisations",
    "isUsedInVocab": "organisations",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/organisations/organisation-type.ttl\">organisation-type.ttl</a>",
    "Description": "Codelist of types of organisations"
  },
  {
    "SKOSList": "organisation-role-type.ttl",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "organisations",
    "isUsedInVocab": "organisations",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/organisations/responsability-role-type.ttl\">responsability-role-type.ttl</a>",
    "Description": "Codelist of types of responsability roles"
  },
  {
    "SKOSList": "day-type.ttl",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "journeys",
    "isUsedInVocab": "journeys",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/journeys/day-type.ttl\">day-type.ttl</a>",
    "Description": "Enumeration of Types of Days"
  },
  {
    "SKOSList": "direction-type.ttl",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "journeys",
    "isUsedInVocab": "journeys",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/journeys/direction-type.ttl\">direction-type.ttl</a>",
    "Description": "Allowed values for Direction Types"
  },
  {
    "SKOSList": "entrance-type.ttl",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "journeys",
    "isUsedInVocab": "journeys",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/journeys/entrance-type.ttl\">entrance-type.ttl</a>",
    "Description": "Allowed values for Entrance Types"
  },
  {
    "SKOSList": "interchange-weighting-type.ttl",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "journeys",
    "isUsedInVocab": "journeys",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/journeys/interchange-weighting-type.ttl\">interchange-weighting-type.ttl</a>",
    "Description": "Allowed values for Interchange Weighting Type"
  },
  {
    "SKOSList": "limited-use-type.ttl",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "journeys",
    "isUsedInVocab": "journeys",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/journeys/limited-use-type.ttl\">limited-use-type.ttl</a>",
    "Description": "Allowed values for Limited Use Type"
  },
  {
    "SKOSList": "mobility-limitation.ttl",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "journeys",
    "isUsedInVocab": "journeys",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/journeys/mobility-limitation.ttl\">mobility-limitation.ttl</a>",
    "Description": "Allowed values for Mobility Limitation"
  },
  {
    "SKOSList": "quay-type.ttl",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "journeys",
    "isUsedInVocab": "journeys",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/journeys/quay-type.ttl\">quay-type.ttl</a>",
    "Description": "Allowed values for Quay Type"
  },
  {
    "SKOSList": "stop-place-component-type.ttl",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "journeys",
    "isUsedInVocab": "journeys",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/journeys/stop-place-component-type.ttl\">stop-component-type.ttl</a>",
    "Description": "Allowed values for Stop Component Type"
  },
  {
    "SKOSList": "stop-place.ttl",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "journeys",
    "isUsedInVocab": "journeys",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/journeys/stop-place.ttl\">stop-place.ttl</a>",
    "Description": "Allowed values for Stop Place"
  },
  {
    "SKOSList": "stop-use-type.ttl",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "journeys",
    "isUsedInVocab": "journeys",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/journeys/stop-use-type.ttl\">stop-use-type.ttl</a>",
    "Description": "Allowed values for Stop Use Type"
  },
  {
    "SKOSList": "booking-access-type.ttl",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "fares",
    "isUsedInVocab": "fares",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/fares/booking-access-type.ttl\">booking-access-type.ttl</a>",
    "Description": "Allowed values for Booking Access Type"
  },
  {
    "SKOSList": "booking-method-type.ttl",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "fares",
    "isUsedInVocab": "fares",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/fares/booking-method-type.ttl\">booking-method-type.ttl</a>",
    "Description": "Allowed values for Booking Method Type"
  },
  {
    "SKOSList": "distribution-channel-type.ttl",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "fares",
    "isUsedInVocab": "fares",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/fares/distribution-channel-type.ttl\">distribution-channel-type.ttl</a>",
    "Description": "Allowed values for Distribution Channel Type"
  },
  {
    "SKOSList": "distribution-rights.ttl",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "fares",
    "isUsedInVocab": "fares",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/fares/distribution-rights.ttl\">distribution-rights.ttl</a>",
    "Description": "Allowed values for Distribution Rights"
  },
  {
    "SKOSList": "fulfilment-method-type.ttl",
    "Licence": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "fares",
    "isUsedInVocab": "fares",
    "Links": "<a href=\"https://raw.githubusercontent.com/oeg-upm/transmodel-ontology/master/kos/fares/fulfilment-method-type.ttl\">fulfilment-method-type.ttl</a>",
    "Description": "Allowed values for Fulfilment Method Type"
  }
 ]
 let table3 = [
  {
    "Vocabulary": "W3C Organization",
    "Prefix": "vocab-org",
    "Serialisation": "rdf+xml <br>html <br>turtle",
    "License": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "organisation",
    "Links": "<a href=\"http://www.w3.org/ns/org#\">org</a>",
    "Description": "W3C Organization Ontology used in the ontology module focused on Organisations"
  },
  {
    "Vocabulary": "W3C Geo WSS84",
    "Prefix": "geo",
    "Serialisation": "rdf+xml <br>html <br>turtle",
    "License": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "journeys",
    "Links": "<a href=\"https://www.w3.org/2003/01/geo/\">geo</a>",
    "Description": "W3C Geo WGS84 Ontology used used for the representation of latitude and longitude data about points."
  },
  {
    "Vocabulary": "Dublin Core",
    "Prefix": "dc",
    "Serialisation": "rdf+xml <br>html <br>turtle",
    "License": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "organisations",
    "Links": "<a href=\"https://www.dublincore.org/specifications/dublin-core/dcmi-terms/2012-06-14/\">dc</a>",
    "Description": "General ontologies like Dublin Core for the representation of basic properties such as identifiers."
  },
  {
    "Vocabulary": "Schema",
    "Prefix": "schema",
    "Serialisation": "rdf+xml <br>html <br>turtle",
    "License": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "organisations",
    "Links": "<a href=\"http://schema.org/docs/documents.html\">schema</a>",
    "Description": "Schema is used in the ontology module focused on Organisations"
  },
  {
    "Vocabulary": "FOAF",
    "Prefix": "foaf",
    "Serialisation": "rdf+xml <br>html <br>turtle",
    "License": "<a href=\"https://creativecommons.org/licenses/by/4.0/\">CC-BY</a>",
    "Lang": "en",
    "Domain": "organisations",
    "Links": "<a href=\"http://xmlns.com/foaf/0.1/\">foaf</a>",
    "Description": "FOAF is used in the ontology module focused on Organisations."
  }
 ]
 function insertTable3(){
  let titles = table3[0]
  table3Html = `
    <caption class="t-above"><span class="table-number">Table 2:</span> Table 2: SKOS list Catalog</caption>\n
    <thead class=""></thead>\n
      <tr class=" redbg">\n
  `;
  for(let key in Object.keys(titles)){
    table3Html += `<th class="p-2" scope="col">${Object.keys(titles)[key]}</th>\n`;
  }
  table3Html += `
  </tr>\n
  <tbody>\n
    `;
  table3.forEach((row) => {
      table3Html += `
      <tr>\n
        <td class="px-2" nowrap>${row['Vocabulary']}</td>\n
        <td class="px-2" nowrap>${row['Prefix']}</td>\n
        <td class="px-2" nowrap>${row['Serialisation']}</td>\n
        <td class="px-2" nowrap>${row['License']}</td>\n
        <td class="px-2" nowrap>${row['Lang']}</td>\n
        <td class="px-2" nowrap>${row['Domain']}</td>\n
        <td class="px-2" nowrap>${row['Links']}</td>\n
        <td class="px-2">${row['Description']}</td>\n
      </tr>\n
      `
  });
  table3Html += `
  </tbody>\n
  `;
  console.log(table3Html)
  $("#reused").append(table3Html);
 }
 function insertTable2(){
  let titles = table2[0]
  let titles1Html = ''
  table2Html = `
    <caption class="t-above"><span class="table-number">Table 2:</span> Table 2: SKOS list Catalog</caption>\n
    <thead class=""></thead>\n
      <tr class=" redbg">\n
  `;
  for(let key in Object.keys(titles)){
    table2Html += `<th class="p-2" scope="col">${Object.keys(titles)[key]}</th>\n`;
  }
  table2Html += `
  </tr>\n
  <tbody>\n
    `;
  table2.forEach((row) => {
      table2Html += `
      <tr>\n
        <td class="px-2" nowrap>${row['SKOSList']}</td>\n
        <td class="px-2" nowrap>${row['Licence']}</td>\n
        <td class="px-2" nowrap>${row['Lang']}</td>\n
        <td class="px-2" nowrap>${row['Domain']}</td>\n
        <td class="px-2" nowrap>${row['isUsedInVocab']}</td>\n
        <td class="px-2" nowrap>${row['Links']}</td>\n
        <td class="px-2">${row['Description']}</td>\n
      </tr>\n
      `
  });
  table2Html += `
  </tbody>\n
  `;
  console.log(table2Html)
  $("#skos").append(table2Html);
 }
function insertTable1(){
  let titles = table1[0]
  let titles1Html = ''
  table1Html = `
    <caption class="t-above"><span class="table-number">Table 1:</span> Modules of the Transmodel Ontology</caption>\n
    <thead class=""></thead>\n
      <tr class=" redbg">\n
  `;
  for(let key in Object.keys(titles)){
    table1Html += `<th class="p-2" scope="col">${Object.keys(titles)[key]}</th>\n`;
  }
  table1Html += `
  </tr>\n
  <tbody>\n
    `;
  table1.forEach((row) => {
      table1Html += `
      <tr>\n
        <td class="px-2" nowrap>${row['Vocabulary']}</td>\n
        <td class="px-2" nowrap>${row['ReleaseDate']}</td>\n
        <td class="px-2" nowrap>${row['Prefix']}</td>\n
        <td class="px-2" nowrap>${row['Serialisation']}</td>\n
        <td class="px-2" nowrap>${row['Licence']}</td>\n
        <td class="px-2" nowrap>${row['Lang']}</td>\n
        <td class="px-2" nowrap>${row['Domain']}</td>\n
        <td class="px-2" nowrap>${row['Links']}</td>\n
        <td class="px-2">${row['Description']}</td>\n
      </tr>\n
      `
  });
  table1Html += `
  </tbody>\n
  `;
  console.log(table1Html)
  $("#vocabulary").append(table1Html);
}
function loadYear(){
  let date = new Date()
  year = date.getFullYear();
  console.log('YEAR: ' + year)
  $("#year").append(year);
}
function loadTables(){
  insertTable1();
  insertTable2();
  insertTable3();
  loadYear();
}
loadTables();
