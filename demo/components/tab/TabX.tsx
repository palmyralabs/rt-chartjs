import { TabPanel } from "./TabPanel"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Tooltip } from '@mui/material';
import { useRef, useState } from "react";
import { TbCopy } from "react-icons/tb";


interface TabInput {
    labels: string[],
    Children: React.FC[]
}
const TabX = (props: TabInput) => {
    const [value, setValue] = useState<any>(0);
    const { labels, Children } = props;
    const contentRef = useRef(null);
    const [title, setTitle] = useState<string>("copy")

    const copyToClipboard = () => {
        const text = contentRef?.current?.textContent;
        navigator.clipboard.writeText(text)
            .then(() => {
                setTitle("copied")
                setTimeout(() => {
                    setTitle("copy")
                }, 1000)
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    };

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className="tab-container">
            <Box sx={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between'
            }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="user-tabs">
                    {labels.map((label, index) => (
                        <Tab key={index} label={label} className="user-tab" disableRipple />
                    ))}
                </Tabs>
                <Tooltip placement="left" title={title}>
                    <div>
                        <TbCopy className="tab-icon" onClick={copyToClipboard} />
                    </div>
                </Tooltip>

            </Box>
            <Box sx={{ width: '100%' }} className="user-form-container">
                {Children.map((Child: any, index: any) => (
                    <TabPanel key={index} value={value} index={index} contentRef={contentRef}>
                        <Child />
                    </TabPanel>
                ))}
            </Box>
        </div >
    )
}

export default TabX
