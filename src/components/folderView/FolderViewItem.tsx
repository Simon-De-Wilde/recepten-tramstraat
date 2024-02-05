import { TreeItem, useTreeItem } from '@mui/x-tree-view';
import { FolderNode, isFolder } from './models';
import { useEffect } from 'react';
import {
	FolderOpen,
	Folder,
	InsertDriveFileOutlined,
} from '@mui/icons-material';

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

	const sortedChildren = node.children?.sort((a, b) => {
		return isFolder(a) && !isFolder(b)
			? -1
			: !isFolder(a) && isFolder(b)
				? 1
				: a.name.localeCompare(b.name);
	});

	return (
		<TreeItem
			key={node.path}
			nodeId={node.path}
			label={node.name}
			expandIcon={<Folder />}
			collapseIcon={<FolderOpen />}
			icon={!isFolder(node) && <InsertDriveFileOutlined />}
		>
			{sortedChildren?.map((child) => (
				<FolderViewItem key={child.path} node={child} />
			))}
		</TreeItem>
	);
};

export default FolderViewItem;
