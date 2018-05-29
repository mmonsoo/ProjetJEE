// Le export permet d'utiliser la class en dehors du fichier
export class VersionElement {
    static count = 0;
    public id: number;
    public votes;
    public valeurMetadonnee: string;
    public valeurElement: string;
    public userId: number;
    public date: Date;
    public commentaire: string;
    constructor(tmpvaleurMetadonnee = '', tmpvaleurElement = '', tmpCommentaire = '', tmpVotes = 0) {
        this.id = VersionElement.count++;
        this.date = new Date();
        this.userId = 0;
        this.valeurMetadonnee = tmpvaleurMetadonnee;
        this.valeurElement = tmpvaleurElement;
        this.commentaire = tmpCommentaire;
        this.votes = tmpVotes;
    }
}
