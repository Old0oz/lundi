export interface MenuInterface {
    /**
     * Identifiant du planning du menu
     * @var (optional) id_plan: number
     */
    id_plan?: number;
    
    /**
     * Identifiant de la recette du planning
     * @var (optional) id_rec: number
     */
    id_rec?: number;
    /**
     * Indication d'un menu du soir ou du midi
     * @var is_midi: number 0 ou 1
     */
    is_midi: number;
}
