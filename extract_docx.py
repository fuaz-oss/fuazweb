import zipfile, re

def extract(path):
    with zipfile.ZipFile(path) as z:
        xml = z.read('word/document.xml').decode('utf-8', errors='ignore')
    text = xml.replace('</w:p>', '\n')
    text = re.sub(r'<[^>]+>', '', text)
    replacements = [('&amp;','&'),('&lt;','<'),('&gt;','>'),('&apos;',"'"),('&quot;','"')]
    for a,b in replacements:
        text = text.replace(a,b)
    lines = [l for l in text.split('\n') if l.strip()]
    return '\n'.join(lines)

print(extract('public/JUNIOR STAFF Annual Performance Evaluation Report_125448.docx'))
