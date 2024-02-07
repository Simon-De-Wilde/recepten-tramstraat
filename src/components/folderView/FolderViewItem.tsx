import { TreeItem } from '@mui/x-tree-view';
import { FolderNode, isFolder } from './models';
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
		return isFolder(a) && !isFolder(b)
			? -1
			: !isFolder(a) && isFolder(b)
				? 1
				: a.name.localeCompare(b.name);
	});

	const nodeIsFolder = isFolder(node);

	return (
		<TreeItem
			key={node.path}
			nodeId={node.path}
			label={
				nodeIsFolder ? (
					node.name
				) : (
					<StyledNavLink to={node.name}>{node.name}</StyledNavLink>
				)
			}
			expandIcon={<Folder />}
			collapseIcon={<FolderOpen />}
			icon={!nodeIsFolder && <InsertDriveFileOutlined />}
		>
			{sortedChildren?.map((child) => (
				<FolderViewItem key={child.path} node={child} />
			))}
		</TreeItem>
	);
};

export default FolderViewItem;
