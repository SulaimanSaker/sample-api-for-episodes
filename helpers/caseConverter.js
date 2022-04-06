function pascalCaseToCamelCase(propName) {
  return propName.charAt(0).toLowerCase() + propName.slice(1);
}

function camelCaseToPascalCase(propName) {
  return propName.charAt(0).toUpperCase() + propName.slice(1);
}

function convertPropertyNames(obj, converterFn) {
  let r,
    value,
    t = Object.prototype.toString.apply(obj);
  if (t == "[object Object]") {
    r = {};
    for (let propName in obj) {
      value = obj[propName];
      r[converterFn(propName)] = convertPropertyNames(value, converterFn);
    }
    return r;
  } else if (t == "[object Array]") {
    r = [];
    for (let i = 0, L = obj.length; i < L; ++i) {
      value = obj[i];
      r[i] = convertPropertyNames(value, converterFn);
    }
    return r;
  }
  return obj;
}

const toCamelCase = (obj) => {
  return convertPropertyNames(obj, pascalCaseToCamelCase);
};

const toPascalCase = (obj) => {
  return convertPropertyNames(obj, camelCaseToPascalCase);
};

export { toCamelCase, toPascalCase };
