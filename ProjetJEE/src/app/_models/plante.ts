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
    public listeVersion: VersionElement[] = [];

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
        // On trie la liste selon les votes
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
    addVersionElement(tmpVersionElement: VersionElement): Plante {
        this.listeVersion.push(tmpVersionElement);
        return this;
    }
    sortListeVersionElement(): void {
        var sortedList: VersionElement[] = this.listeVersion.sort(
            (n1, n2) => {
                if (n1.votes < n2.votes) {
                    return 1;
                }
                if (n1.votes > n2.votes) {
                    return -1;
                }
                return 0;
            }
        );
        this.listeVersion = sortedList;
    }
}
