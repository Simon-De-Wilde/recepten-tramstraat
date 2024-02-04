import { TreeItem, useTreeItem } from '@mui/x-tree-view';
import { FolderNode } from './models';
import { useEffect } from 'react';
import { FolderOpen, Folder, InsertDriveFileOutlined } from '@mui/icons-material';

type FolderViewItemProps = {
	node: FolderNode;
};

const FolderViewItem: React.FC<FolderViewItemProps> = ({ node }) => {
	const { selected } = useTreeItem(node.path);

	const isFolder = node.children;

	useEffect(() => {
		if (selected) {
			console.log(node);
		}
	}, [selected, node]);

	const sortedChildren = node.children?.sort((a, b) => {
		return a.children && !b.children
			? -1
			: !a.children && b.children
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
			icon={!isFolder && <InsertDriveFileOutlined />}
		>
			{sortedChildren?.map((child) => (
				<FolderViewItem key={child.path} node={child} />
			))}
		</TreeItem>
	);
};

export default FolderViewItem;
