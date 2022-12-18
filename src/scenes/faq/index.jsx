import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
            What is Admin Dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Admin Dashboard is an online web-based Human Resource Management System
            that can be used by any small and medium enterprise to manage its most 
            important asset-its people! 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
            What do I need to start my Online Admin Dashboard? 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            All you need is a computer with internet connection and you are good to go!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
            What are my computer requirements to use admin dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Admin Dashboard is a web based application that does not have any special 
          hardware requirements. If your computer can handle Yahoo Mail, Gmail and 
          Hotmail, it can definitely handle Admin Dashboard.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
            Can I cancel my subscription?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           You can cancel anytime, you will not be charged from your next 
           billing cycle.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
            How long does it take to get a response from Admin Dashboard support?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Admin Dashboard standard response time is 1-2 business days, but we 
            try our best to respond to all queries within the several hours or 
            maximum by the next business day.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;