export class FolderNode {
	name:string;
	path:string;
	children: FolderNode[] | undefined;

	constructor(name: string, path: string){
		this.name = name;
		this.path = path;
	}
}