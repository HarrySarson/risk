export const CHANGE_OWNER = 'CHANGE_OWNER';

export function changeOwner(territory, newOwner) {
  return {
    type: CHANGE_OWNER,
    territory,
    newOwner,
  };
}