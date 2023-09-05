import sanitizeHtml from 'sanitize-html';

type SanitizedObject = {
  [key: string]: any;
};

export default function sanitizeProperties(data: SanitizedObject): SanitizedObject {
    const sanitizedData: SanitizedObject = {};
  
    for (const prop in data) {
      if (Object.prototype.hasOwnProperty.call(data, prop)) {
        if (typeof data[prop] === 'string') {
          // Sanitize only if the property is a string
          sanitizedData[prop] = sanitizeHtml(data[prop]);
        } else {
          // Keep other property types as is
          sanitizedData[prop] = data[prop];
        }
      }
    }
  
    return sanitizedData;
  }
