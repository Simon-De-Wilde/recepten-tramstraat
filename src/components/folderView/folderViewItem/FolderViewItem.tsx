import { TreeItem } from '@mui/x-tree-view';
import { FolderNode } from 'shared/FolderNode.models';
import {
	FolderOpen,
	Folder,
	InsertDriveFileOutlined,
} from '@mui/icons-material';
import { StyledNavLink } from './FolderViewItem.style';

type FolderViewItemProps = {
	node: FolderNode;
};

const FolderViewItem: React.FC<FolderViewItemProps> = ({ node }) => {
	const sortedChildren = node.children?.sort((a, b) => {
		return a.isFolder && !b.isFolder
			? -1
			: !a.isFolder && b.isFolder
				? 1
				: a.name.localeCompare(b.name);
	});

	const ItemComponent = () => (
		<TreeItem
			nodeId={node.path}
			label={node.name}
			expandIcon={<Folder />}
			collapseIcon={<FolderOpen />}
			icon={!node.isFolder && <InsertDriveFileOutlined />}
		>
			{sortedChildren?.map((child) => (
				<FolderViewItem key={child.path} node={child} />
			))}
		</TreeItem>
	);

	return node.isFolder ? (
		node.children.length ? (
			<ItemComponent />
		) : null
	) : (
		<StyledNavLink to={node.name}>
			<ItemComponent />
		</StyledNavLink>
	);
};

export default FolderViewItem;
