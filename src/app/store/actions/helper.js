
/**
 * Creates object containing actions types.
 *
 * @param {array} types Array of types.
 * @returns {object} Object containing keys of each type with values
 * equal to the corresponding key.
 *
 * @example
 * 
 * getTypes(['ADD_TODO', 'TOGGLE_TODO', 'SET_VISIBILITY_FILTER']);
 * // => {
 *   ADD_TODO: 'ADD_TODO',
 *   TOGGLE_TODO: 'TOGGLE_TODO',
 *   SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
 * }
 *
 */
export function getTypes(types) {
  return types.reduce(
    (acc, type) => {
      acc[type] = type;
      
    }, 
    {}
  );
}
