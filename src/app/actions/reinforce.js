export const REINFORCE = 'REINFORCE';

export function reinforce(territory, reinforcementCount) {
  return {
    type: REINFORCE,
    territory,
    reinforcementCount,
  };
}