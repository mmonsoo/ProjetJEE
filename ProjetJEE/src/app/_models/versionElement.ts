// Le export permet d'utiliser la class en dehors du fichier
export class VersionElement {
    static count = 0;
    public id: number;
    public votes = 0;
    public valeurMetadonnee: string;
    public valeurElement: string;
    public userId: number;
    public date: Date;
    public commentaire: string;
    constructor(tmpvaleurElement = '', tmpCommentaire = '') {
        this.id = VersionElement.count++;
        this.commentaire = '';
        this.date = new Date();
        this.userId = 0;
    }
}
