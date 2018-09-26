export interface RecetteInterface {
    /**
     * Identifiant de la recette
     * @var (optional) idR: number
     */
    idR?: number;

    /**
     * Titre de la recette
     * @var titre: String
     */
    titre: String;

    /**
     * Instructions de la recette
     * @var Instructions: String;
     */
    instructions: String;

    /**
     * Temps de préparation
     * @var temps_preparation: number
     */
    temps_preparation: number;

    /**
     * Temps de cuisson
     * @var temps_cuisson: number
     */
    temps_cuisson: number;

    /**
     * Nombre de personnes
     * @var nb_personnes: number
     */
    nb_personnes: number;

    /**
     * Id utilisateur
     * @var utilisateurs_id: number
     */
    utilisateurs_id: number;

    /**
     * Id du type
     * @var types_id:: number
     */
    types_id: number;
}
