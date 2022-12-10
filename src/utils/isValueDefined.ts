export const isValueDefined = <T>(value: T) => {
  if (Array.isArray(value)) {
    return value.length > 0;
  } else {
    return !!value;
  }
};
