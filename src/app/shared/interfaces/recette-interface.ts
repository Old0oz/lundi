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
     * @var temps_prepa: number
     */
    temps_prepa: number;

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
     * @var id_utilisateur: number
     */
    id_utilisateur: number;

    /**
     * Id du type 
     * @var id_types: number
     */
    id_type: number;
}
