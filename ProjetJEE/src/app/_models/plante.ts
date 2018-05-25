// Le export permet d'utiliser la class en dehors du fichier
export class Plante {
    static count = 0;
    public genre: string;
    public ordre: string;
    public famille: string;
    public id: number;
    public ville: string;
    public dateSoumission: string;
    public photo: string;
    public utilisateur: string;

    // On peut mettre des paramètres par défaut

    constructor(genre: string = '', ordre: string = '', famille: string = '', photo: string = '', utilisateur: string) {
        this.id = Plante.count++;
        this.genre = genre;
        this.ordre = ordre;
        this.famille = famille;
        this.ville = '';
        this.dateSoumission = '';
        this.photo = photo;
        this.utilisateur = utilisateur;

    }

    setVille(tmpville: string): void {
        this.ville = tmpville;
    }
    setDateSoumission(tmpdatesoumission: string): void {
        this.dateSoumission = tmpdatesoumission;
    }
}