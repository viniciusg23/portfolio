import { FormatAlignCenter, FormatAlignLeft } from "@mui/icons-material";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import React from "react";

function SkillsContentOrientation() {

    const [alignment, setAlignment] = React.useState<string | null>('left');

    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
        >
            <ToggleButton value="left" aria-label="left aligned">
                <FormatAlignLeft />
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
                <FormatAlignCenter />
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default SkillsContentOrientation;