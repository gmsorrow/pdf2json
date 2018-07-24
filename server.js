const PDFParser = require('./pdfparser.js');

const pdfParser = new PDFParser();
//const filePath = 'D://ex 2.pdf';
//const filePath = 'D://ex 3.pdf';
const filePath = 'D://btn_2.pdf';


pdfParser.loadPDF(filePath);
pdfParser.on('pdfParser_dataError', errData => {
  console.error(errData.parserError);
});
pdfParser.on('pdfParser_dataReady', pdfData => {
  //console.log(JSON.stringify(pdfData)); // TEST
});
