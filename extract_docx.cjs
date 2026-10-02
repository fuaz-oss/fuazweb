const AdmZip = require('adm-zip');

function extractDocx(filePath, label) {
  try {
    const zip = new AdmZip(filePath);
    const entry = zip.getEntry('word/document.xml');
    if (!entry) return 'No document.xml found';
    const xml = zip.readAsText(entry);
    const text = xml
      .replace(/<\/w:p>/g, '\n')
      .replace(/<w:tab\/>/g, '\t')
      .replace(/<[^>]+>/g, '')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&apos;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
    console.log('=== ' + label + ' ===\n');
    console.log(text);
    console.log('\n\n');
  } catch(e) {
    console.log('Error for ' + label + ': ' + e.message);
  }
}

extractDocx('public/ACADEMIC STAFF Annual Performance Evaluation Report_021007.docx', 'ACADEMIC STAFF');
extractDocx('public/JUNIOR STAFF Annual Performance Evaluation Report_125448.docx', 'JUNIOR STAFF');
extractDocx('public/SENIOR STAFF Annual Performance Evaluation Report_125525.docx', 'SENIOR STAFF');
