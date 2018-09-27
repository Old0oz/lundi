import { Moment } from "../../../../node_modules/moment";

export interface MenuInterface {
    id?:number;
    titre: string;
    instructions: string;
    temps_preparation: number;
    temps_cuisson:number;
    nb_personnes: number;
    utilisateurs_id: number;
    types_id: number;
     /**
     * Identifiant du planning du menu
     * @var (optional) id_plan: number
     */
    planning_id?: number;
    /**
     * Identifiant de la recette du planning
     * @var (optional) id_rec: number
     */
    recettes_id?: number;
    /**
     * Indication d'un menu du soir ou du midi
     * @var is_midi: number 0 ou 1
     */
    is_midi: number;
        /**
     * Indication d'un menu du soir ou du midi
     * @var is_midi: number 0 ou 1
     */
    date: Moment;
}
