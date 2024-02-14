import { Input } from '@mui/joy';
import { useFolderStructure } from 'hooks/useFolderStructure';
import React, { useEffect, useState } from 'react';
import { FolderNode, filterFolderNode } from 'shared/FolderNode.models';

type TextSearchProps = {
	setFilteredroot: (x: FolderNode) => void;
};

const TreeTextSearch: React.FC<TextSearchProps> = ({ setFilteredroot }) => {
	const root = useFolderStructure();

	const [value, setValue] = useState('');

	useEffect(() => {
		const debounceFn = setTimeout(() => {
			const newFilteredRoot = filterFolderNode(root, value);
			setFilteredroot({ ...newFilteredRoot });
		}, 250);

		return () => {
			clearTimeout(debounceFn);
		};
	}, [root, setFilteredroot, value]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// This will trigger the useEffect constantly while typing which will clear the timeout prematurly
		// So the filtering wil only happen when the typing stops long enough.
		setValue(event.target.value);
	};

	return <Input placeholder="Search" onChange={handleChange} value={value} />;
};

export default TreeTextSearch;
