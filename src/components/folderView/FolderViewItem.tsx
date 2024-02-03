import { TreeItem, useTreeItem } from '@mui/x-tree-view';
import { FolderNode } from './models';
import { useEffect } from 'react';

type FolderViewItemProps = {
	node: FolderNode;
};

const FolderViewItem: React.FC<FolderViewItemProps> = ({ node }) => {
	const { selected } = useTreeItem(node.path);

	useEffect(() => {
		if (selected) {
			console.log(node);
		}
	}, [selected, node]);

	return (
		<TreeItem key={node.path} nodeId={node.path} label={node.name}>
			{node.children?.map((child) => (
				<FolderViewItem key={child.path} node={child} />
			))}
		</TreeItem>
	);
};

export default FolderViewItem;
