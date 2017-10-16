/* Fonction pour prendre les 4 dernieres recettes avec le filter, et le sort permet de retourner le tableau*/
export function getLastRecepies(recettes) {
    return recettes
    .filter(recette => recette.id>(recettes.length-5))
    .sort((ra,rb) => (rb.id-ra.id))
}