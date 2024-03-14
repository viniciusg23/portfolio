import { Tooltip, Typography, Link, ClickAwayListener, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { ISkill } from "../data/skillPageContent";


function SkillElement(props: ISkill) {

    const { name, description, learnMoreUrl, skillIconId, iconUrl } = props;
    const [open, setOpen] = useState<boolean>(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };


    const title = (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5em" }}>
            <Typography textAlign="left" component="h3" variant="h4">{name}</Typography>
            <Typography textAlign="left">{description}</Typography>
            <Typography textAlign="left">
                <Link href={learnMoreUrl} target="_blank" color="inherit">Saiba mais</Link>
            </Typography>
        </Box>
    )

    return (
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <Tooltip
                PopperProps={{
                    disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={title}
                arrow

            >

                <motion.p
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    onClick={handleTooltipOpen}
                    style={{ cursor: "pointer" }}
                >
                    {skillIconId ? (
                        <img src={`https://skillicons.dev/icons?i=${skillIconId}`} width={"64px"} />
                    ) : (
                        <img src={iconUrl} />
                    )}
                </motion.p>
            </Tooltip>
        </ClickAwayListener>


    );
}

export default SkillElement;
