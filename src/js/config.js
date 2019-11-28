module.exports = {
    cwrcRootUrl: '',
    nerveUrl: 'https://dh.sharcnet.ca/NerveService',
    validationUrl: 'https://validator.services.cwrc.ca/validator/validate.html',
    schema: {
        schemaProxyUrl: 'http://localhost:3000',
        schemas: [{
                id: 'tei',
                name: 'CWRC Basic TEI Schema',
                schemaMappingsId: 'tei',
                xmlUrl: [
                    'https://cwrc.ca/schemas/cwrc_tei_lite.rng',
                    'https://raw.githubusercontent.com/cwrc/CWRC-Schema/master/schemas/cwrc_tei_lite.rng'
                ],
                cssUrl: [
                    'https://cwrc.ca/templates/css/tei.css',
                    'https://raw.githubusercontent.com/cwrc/CWRC-Schema/master/templates/css/tei.css'
                ]
            },
            {
                id: 'events',
                name: 'Events Schema',
                schemaMappingsId: 'orlando',
                xmlUrl: [
                    'https://cwrc.ca/schemas/orlando_event_v2.rng',
                    'https://raw.githubusercontent.com/cwrc/CWRC-Schema/master/schemas/orlando_event_v2.rng'
                ],
                cssUrl: [
                    'https://cwrc.ca/templates/css/orlando_v2_cwrc-writer.css',
                    'https://raw.githubusercontent.com/cwrc/CWRC-Schema/master/templates/css/orlando_v2_cwrc-writer.css'
                ]
            },
            {
                id: 'biography',
                name: 'Biography Schema',
                schemaMappingsId: 'orlando',
                xmlUrl: [
                    'https://cwrc.ca/schemas/orlando_biography_v2.rng',
                    'https://raw.githubusercontent.com/cwrc/CWRC-Schema/master/schemas/orlando_biography_v2.rng'
                ],
                cssUrl: [
                    'https://cwrc.ca/templates/css/orlando_v2_cwrc-writer.css',
                    'https://raw.githubusercontent.com/cwrc/CWRC-Schema/master/templates/css/orlando_v2_cwrc-writer.css'
                ]
            },
            {
                id: 'writing',
                name: 'Writing Schema',
                schemaMappingsId: 'orlando',
                xmlUrl: [
                    'https://cwrc.ca/schemas/orlando_writing_v2.rng',
                    'https://raw.githubusercontent.com/cwrc/CWRC-Schema/master/schemas/orlando_writing_v2.rng'
                ],
                cssUrl: [
                    'https://cwrc.ca/templates/css/orlando_v2_cwrc-writer.css',
                    'https://raw.githubusercontent.com/cwrc/CWRC-Schema/master/templates/css/orlando_v2_cwrc-writer.css'
                ]
            },
            {
                id: 'cwrcEntry',
                name: 'CWRC Entry Schema',
                schemaMappingsId: 'cwrcEntry',
                xmlUrl: [
                    'https://cwrc.ca/schemas/cwrc_entry.rng',
                    'https://raw.githubusercontent.com/cwrc/CWRC-Schema/master/schemas/cwrc_entry.rng'
                ],
                cssUrl: [
                    'https://cwrc.ca/templates/css/cwrc.css',
                    'https://raw.githubusercontent.com/cwrc/CWRC-Schema/master/templates/css/cwrc.css'
                ]
            },
            {
                id: 'epidoc',
                name: 'EpiDoc Schema',
                schemaMappingsId: 'tei',
                xmlUrl: [
                    'http://www.stoa.org/epidoc/schema/latest/tei-epidoc.rng',
                    'https://cwrc.ca/epidoc/schema/latest/tei-epidoc.rng'
                ],
                cssUrl: [
                    'https://cwrc.ca/templates/css/tei.css'
                ]
            },
            {
                id: 'teiAll',
                name: 'TEI All Schema',
                schemaMappingsId: 'tei',
                xmlUrl: [
                    'https://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_all.rng',
                    'https://jenkins.tei-c.org/job/TEIP5/lastSuccessfulBuild/artifact/P5/release/xml/tei/custom/schema/relaxng/tei_all.rng'
                ],
                cssUrl: [
                    'https://cwrc.ca/templates/css/tei.css'
                ]
            },
            {
                id: 'teiCorpus',
                name: 'TEI Corpus Schema',
                schemaMappingsId: 'tei',
                xmlUrl: [
                    'https://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_corpus.rng',
                    'https://jenkins.tei-c.org/job/TEIP5/lastSuccessfulBuild/artifact/P5/release/xml/tei/custom/schema/relaxng/tei_corpus.rng'
                ],
                cssUrl: [
                    'https://cwrc.ca/templates/css/tei.css'
                ]
            },
            {
                id: 'teiMs',
                name: 'TEI Manuscript Schema',
                schemaMappingsId: 'tei',
                xmlUrl: [
                    'https://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_ms.rng',
                    'https://jenkins.tei-c.org/job/TEIP5/lastSuccessfulBuild/artifact/P5/release/xml/tei/custom/schema/relaxng/tei_ms.rng'
                ],
                cssUrl: [
                    'https://cwrc.ca/templates/css/tei.css'
                ]
            },
            {
                id: 'teiSpeech',
                name: 'TEI Speech Schema',
                schemaMappingsId: 'tei',
                xmlUrl: [
                    'https://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_speech.rng',
                    'https://jenkins.tei-c.org/job/TEIP5/lastSuccessfulBuild/artifact/P5/release/xml/tei/custom/schema/relaxng/tei_speech.rng'
                ],
                cssUrl: [
                    'https://cwrc.ca/templates/css/tei.css'
                ]
            },
            {
                id: 'teiLite',
                name: 'TEI Lite Schema',
                schemaMappingsId: 'teiLite',
                xmlUrl: [
                    'https://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_lite.rng',
                    'https://jenkins.tei-c.org/job/TEIP5/lastSuccessfulBuild/artifact/P5/release/xml/tei/custom/schema/relaxng/tei_lite.rng',
                ],
                cssUrl: [
                    'https://cwrc.ca/templates/css/tei.css'
                ]
            },
            {
                id: 'moravian',
                name: 'Moravian Lives (TEI)',
                schemaMappingsId: 'teiLite',
                xmlUrl: [
                    'https://raw.githubusercontent.com/moravianlives/ML/master/Projects/TEI_Memoirs/out/MoravianMemoirs.rng'
                ],
                cssUrl: [
                    'https://cwrc.ca/templates/css/tei.css'
                ]
            }
        ]
    }
};