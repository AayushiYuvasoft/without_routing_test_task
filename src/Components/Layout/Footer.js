import { Box, Grid } from "@mui/material";
import adminIcon from '../../Assets/images/admin-icon.png'
import officerIcon from '../../Assets/images/officer.png'
import AppIcon from '../../Assets/images/app-icon.png'
import hudIcon from '../../Assets/images/hud-icon.svg'

const AppFooter = () => {
    return (
        <Box className="footer-wrapper">
					<Grid container justifyContent="space-between">
						<Grid item sm={3}>
							<Box className="footer-icon-box">
							<img src={AppIcon} className="blend-lighten" />

							</Box>
						</Grid>
						<Grid item sm={6}>
							<Box className="footer-icon-box" display={"flex"} justifyContent={'center'} height={'100%'} alignItems={'center'}>
							
								<img src={adminIcon} />
								<img src={officerIcon} />
								
							</Box>
						</Grid>
						<Grid item sm={3}>
							<Box className="footer-icon-box" display={"flex"} justifyContent={'end'}>
							<img src={hudIcon} className="blend-lighten"  />
							</Box>
						</Grid>
					</Grid>
        </Box>
    )
}

export default AppFooter;