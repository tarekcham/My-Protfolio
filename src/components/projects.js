import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        
        <div className="projects-grid">
        <Grid>

        {/* Project 0 */}
          <Cell col={4}>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', backgroundColor:"#70af98"}} >Shopitme Application</CardTitle>
              <CardText>
                React APP to ask to deliver anything you need from the market. 
              </CardText>
              <CardActions border>
                <Button colored>   <a href="https://github.com/devugees/react-shopitme" target="_blank"> GitHub</a></Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
         </Cell>

          {/* Project 1 */}
          <Cell col={4}>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', backgroundColor:"#70af98"}} >React-Todo-List #1</CardTitle>
              <CardText>
                React APP to keep track of all your ToDo
              </CardText>
              <CardActions border>
                <Button colored>   <a href="https://github.com/tarekcham/React-Too-Do-List" target="_blank"> GitHub</a></Button>
                <Button colored> <a href="https://tarekcham.github.io/React-Too-Do-List/" target="_blank">Live Demo</a> </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>


          {/* Project 2 */}
          <Cell col={4}>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', backgroundColor:"#70af98"}} >>React-Counter #2</CardTitle>
              <CardText>
                A React APP to add or decrease numbers
              </CardText>
              <CardActions border>
                <Button colored> <a href="https://github.com/tarekcham/React-Counter" target="_blank"> GitHub</a></Button>
                <Button colored> <a href="https://tarekcham.github.io/React-Counter/" target="_blank"> Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>

          {/* Project 3 */}
          <Cell col={4}>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', backgroundColor:"#70af98"}} >React-Picsum Api #3</CardTitle>
              <CardText>
                grab pictures using Picsum api
              </CardText>
              <CardActions border>
                <Button colored><a href="https://github.com/tarekcham/React-lifeCycle-exercise" target='_blank'>GitHub</a></Button>
                <Button colored><a href="https://tarekcham.github.io/React-lifeCycle-exercise/" target='_blank'>Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>


         {/* Project 4 */}
          <Cell col={4}>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', backgroundColor:"#70af98"}} >Students DB #4</CardTitle>
              <CardText>
                A CRUD APP to register new students using Js, Jquery, Node.js, MongoDB
              </CardText>
              <CardActions border>
                <Button colored>   <a href="https://github.com/tarekcham/StudentsDB" target="_blank"> GitHub</a></Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>


          {/* Project 5 */}
          <Cell col={4}>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', backgroundColor:"#70af98"}} >>Online Shop #5</CardTitle>
              <CardText>
                A shopping online application builded using jquery-bootstrap-mysql-Webpack-neutrino
              </CardText>
              <CardActions border>
                <Button colored> <a href="https://github.com/tarekcham/My-online-shop" target="_blank"> GitHub</a></Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>

          {/* Project 6 */}
          <Cell col={4}>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', backgroundColor:"#70af98"}} >Ebooks-sales-App</CardTitle>
              <CardText>
                Ebook Seller App Node.js/ Express app that uses the Stripe API to sell an ebook
              </CardText>
              <CardActions border>
                <Button colored><a href="https://github.com/tarekcham/Ebooks-sales-App" target='_blank'>GitHub</a></Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>

        </Grid>  
        </div>
      )
     } 

  }


  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>My Projects</Tab>
        </Tabs>
         
              <div className="content">{this.toggleCategories()}</div>
  


      </div>
    )
  }
}

export default Projects;
