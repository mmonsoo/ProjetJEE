// Le export permet d'utiliser la class en dehors du fichier
export class Plante {
    static count = 0;
    public genre: string;
    public ordre: string;
    public famille: string;
    public id: number;
    public ville: string;
    public dateSoumission: string;

    // On peut mettre des paramètres par défaut

    constructor(genre: string = '', ordre: string = '', famille: string = '', paramOptionnel: string = '') {
        this.id = Plante.count++;
        this.genre = genre;
        this.ordre = ordre;
        this.famille = famille;
        this.ville = '';
        this.dateSoumission = '';

    }

    setVille(tmpville: string): void {
        this.ville = tmpville;
    }
    setDateSoumission(tmpdatesoumission: string): void {
        this.dateSoumission = tmpdatesoumission;
    }
}
