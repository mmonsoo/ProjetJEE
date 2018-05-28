import { VersionElement } from ".";

// Le export permet d'utiliser la class en dehors du fichier
export class Plante {
    static count = 0;
    public espece: string;
    public classe: string;
    public embranchement: string;
    public genre: string;
    public ordre: string;
    public famille: string;
    public id: number;
    public ville: string;
    public dateSoumission: string;
    public photo: string;
    public utilisateur: string;
    public listeVersion: VersionElement[];
    // On peut mettre des paramètres par défaut
    constructor(genre: string = '', ordre: string = '', famille: string = '', photo: string = '', utilisateur: string = '') {
        this.id = Plante.count++;
        this.genre = genre;
        this.ordre = ordre;
        this.famille = famille;
        this.ville = '';
        this.dateSoumission = '';
        this.photo = photo;
        this.utilisateur = utilisateur;
        this.listeVersion = [];
    }
    setVille(tmpville: string): void {
        this.ville = tmpville;
    }
    setDateSoumission(tmpdatesoumission: string): void {
        this.dateSoumission = tmpdatesoumission;
    }
    getVersionElementById(id: number): VersionElement {
        return this.listeVersion.filter(a => a.id === id)[0];
    }
    addVersionElement(tmpVersionElement: VersionElement): void {
        this.listeVersion.push(tmpVersionElement);
    }
}
