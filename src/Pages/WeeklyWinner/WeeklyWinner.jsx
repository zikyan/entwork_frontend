import React from 'react';
import './weeklywinner.css';
import saireen from '../../images/hania.PNG';
import faizan from '../../images/faizan.jpg';
import cat from '../../images/humayu.jpg';
import casio from '../../images/abhinand.jpg';
// import test from '../../images/test.jpg';
import ShareIcon from '@mui/icons-material/Share';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

export default function wWeklyWinner(props) {
  return (
    <div className="weekly-parent">
        <div className={`weekly-box-design ${props.darkmode?"changeModeMain":""}`}>
        {/* <div className="weekly-upper1">
            <ul className='weekly-ul'>
                <li className='weekly-li-selected'>Fun</li>
                <li>Work</li>
                <li>Twitter Virals</li>
                <li>weekly winner</li>
                <li>Recommended</li>
            </ul>
        </div> */}
        <div className="weekly-upper2">
            <ul className={`${props.darkmode?"darkweekly-ul2":"weekly-ul2"}`}>
                <li>#Cat</li>
                <li>#Amirliaqat</li>
                <li>#Pti</li>
                <li>#MLN</li>
                <li>#ImranKhan</li>
                <li>#PetrolPrices</li>
                <li>#work</li>
                <li>#css</li>
                <li>#android</li>
                <li>#Weekly Highlights</li>
                <li>#Twitter</li>
                <li>#Biden</li>
                <li>#Node</li>
                <li>#TLp</li>
                <li>#Afghanistan</li>
                <li>#KarachiKings</li>
                <li>#Cricket</li>
                <li>#Football</li>
                <li>#LahoreQalandars</li>
                <li>#SuperBowl</li>
                <li>#Cat</li>
            </ul>
        </div>
        </div>
        <div className={`weekly-box-design-lower ${props.darkmode?"changeModeMain":""}`}>
        <div className="weekly-upper3">
            <div className="weekly-post1">
                <div className="weekly-post-left">
                        <Link to='/profile'><img className='weekly-post-dp' src={saireen} alt="" /></Link>
                        <div className="weekly-post-username">
                            <Link style={{textDecoration:'none', color:`${props.darkmode?"#fff":'#000'}`,fontWeight:'600'}} to='/profile'>Saireen Ahmad</Link>
                            <div className="weekly-post-belowname">
                                <p className='weekly-post-time-tag'>WeeklyWinner,&nbsp;</p>
                                <p className='weekly-post-time-tag'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="weekly-post-right">
                        <button className='weekly-button-save'>Save</button>
                        <button className='weekly-button-save weekly-button-download'>Download</button>
                    </div>
            </div>
            <Link to='/post' className={`weekly-post-caption ${props.darkmode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>Everything is Temporary But Tax is Permanent.</p></Link>

                <div className={`weekly-mainpost ${props.darkmode?"changeModelite":""}`}>
                    <img className='weekly-mainpost-image' src={cat} alt="" />
                </div>
                <div className="weekly-mainpost-below">
                        <div className="weekly-mainpost-below-left">
                            <div className="weekly-mainpost-button-flex-parent">
                                <button> <ArrowUpwardIcon /> 1.5k</button>
                                <button><ArrowDownwardIcon />40</button>
                                <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                            </div>
                        </div>
                        <div className="weekly-mainpost-below-right">
                            <button className='weekly-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                            <button className='weekly-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                            <button className='weekly-mainpost-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                        </div>
                </div>
        </div>

        <div className="weekly-upper3">
            <div className="weekly-post1">
                <div className="weekly-post-left">
                <Link to='/profile'><img className='weekly-post-dp' src={faizan} alt="" /></Link>
                        <div className="weekly-post-username">
                        <Link style={{textDecoration:'none', color:`${props.darkmode?"#fff":'#000'}`,fontWeight:'600'}} to='/profile'>Faizan Muhammad</Link>
                            <div className="weekly-post-belowname">
                                <p className='weekly-post-time-tag'>WeeklyWinner,&nbsp;</p>
                                <p className='weekly-post-time-tag'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="weekly-post-right">
                        <button className='weekly-button-save'>Save</button>
                        <button className='weekly-button-save weekly-button-download'>Download</button>
                    </div>
            </div>
            <Link to='/post' className={`weekly-post-caption ${props.darkmode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>You are not supposed to say this.</p></Link>

                <div className={`v-mainpost ${props.darkmode?"changeModelite":""}`}>
                    <img className='weekly-mainpost-image' src={casio} alt="" />
                </div>
                <div className="weekly-mainpost-below">
                        <div className="weekly-mainpost-below-left">
                            <div className="weekly-mainpost-button-flex-parent">
                                <button> <ArrowUpwardIcon /> 1.5k</button>
                                <button><ArrowDownwardIcon />40</button>
                                <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                            </div>
                        </div>
                        <div className="weekly-mainpost-below-right">
                            <button className='weekly-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                            <button className='weekly-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                            <button className='weekly-mainpost-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                        </div>
                </div>

                
        </div>

        <div className="weekly-upper3">
            <div className="weekly-post1">
                <div className="weekly-post-left">
                        <Link to='/profile'><img className='weekly-post-dp' src={saireen} alt="" /></Link>
                        <div className="weekly-post-username">
                            <Link style={{textDecoration:'none', color:`${props.darkmode?"#fff":'#000'}`,fontWeight:'600'}} to='/profile'>Saireen Ahmad</Link>
                            <div className="weekly-post-belowname">
                                <p className='weekly-post-time-tag'>WeeklyWinner,&nbsp;</p>
                                <p className='weekly-post-time-tag'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="weekly-post-right">
                        <button className='weekly-button-save'>Save</button>
                        <button className='weekly-button-save weekly-button-download'>Download</button>
                    </div>
            </div>
            <Link to='/post' className={`weekly-post-caption ${props.darkmode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>Everything is Temporary But Tax is Permanent.</p></Link>

                <div className={`weekly-mainpost ${props.darkmode?"changeModelite":""}`}>
                    <img className='weekly-mainpost-image' src={cat} alt="" />
                </div>
                <div className="weekly-mainpost-below">
                        <div className="weekly-mainpost-below-left">
                            <div className="weekly-mainpost-button-flex-parent">
                                <button> <ArrowUpwardIcon /> 1.5k</button>
                                <button><ArrowDownwardIcon />40</button>
                                <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                            </div>
                        </div>
                        <div className="weekly-mainpost-below-right">
                            <button className='weekly-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                            <button className='weekly-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                            <button className='weekly-mainpost-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                        </div>
                </div>
        </div>

        <div className="weekly-upper3">
            <div className="weekly-post1">
                <div className="weekly-post-left">
                <Link to='/profile'><img className='weekly-post-dp' src={faizan} alt="" /></Link>
                        <div className="weekly-post-username">
                        <Link style={{textDecoration:'none', color:`${props.darkmode?"#fff":'#000'}`,fontWeight:'600'}} to='/profile'>Faizan Muhammad</Link>
                            <div className="weekly-post-belowname">
                                <p className='weekly-post-time-tag'>WeeklyWinner,&nbsp;</p>
                                <p className='weekly-post-time-tag'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="weekly-post-right">
                        <button className='weekly-button-save'>Save</button>
                        <button className='weekly-button-save weekly-button-download'>Download</button>
                    </div>
            </div>
            <Link to='/post' className={`weekly-post-caption ${props.darkmode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>You are not supposed to say this.</p></Link>

                <div className={`v-mainpost ${props.darkmode?"changeModelite":""}`}>
                    <img className='weekly-mainpost-image' src={casio} alt="" />
                </div>
                <div className="weekly-mainpost-below">
                        <div className="weekly-mainpost-below-left">
                            <div className="weekly-mainpost-button-flex-parent">
                                <button> <ArrowUpwardIcon /> 1.5k</button>
                                <button><ArrowDownwardIcon />40</button>
                                <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                            </div>
                        </div>
                        <div className="weekly-mainpost-below-right">
                            <button className='weekly-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                            <button className='weekly-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                            <button className='weekly-mainpost-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                        </div>
                </div>

                
          </div>

          <div className="weekly-upper3">
            <div className="weekly-post1">
                <div className="weekly-post-left">
                <Link to='/profile'><img className='weekly-post-dp' src={faizan} alt="" /></Link>
                        <div className="weekly-post-username">
                        <Link style={{textDecoration:'none', color:`${props.darkmode?"#fff":'#000'}`,fontWeight:'600'}} to='/profile'>Faizan Muhammad</Link>
                            <div className="weekly-post-belowname">
                                <p className='weekly-post-time-tag'>WeeklyWinner,&nbsp;</p>
                                <p className='weekly-post-time-tag'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="weekly-post-right">
                        <button className='weekly-button-save'>Save</button>
                        <button className='weekly-button-save weekly-button-download'>Download</button>
                    </div>
            </div>
            <Link to='/post' className={`weekly-post-caption ${props.darkmode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>You are not supposed to say this.</p></Link>

                <div className={`v-mainpost ${props.darkmode?"changeModelite":""}`}>
                    <img className='weekly-mainpost-image' src={casio} alt="" />
                </div>
                <div className="weekly-mainpost-below">
                        <div className="weekly-mainpost-below-left">
                            <div className="weekly-mainpost-button-flex-parent">
                                <button> <ArrowUpwardIcon /> 1.5k</button>
                                <button><ArrowDownwardIcon />40</button>
                                <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                            </div>
                        </div>
                        <div className="weekly-mainpost-below-right">
                            <button className='weekly-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                            <button className='weekly-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                            <button className='weekly-mainpost-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                        </div>
                </div>

                
          </div>

          <div className="weekly-upper3">
            <div className="weekly-post1">
                <div className="weekly-post-left">
                        <Link to='/profile'><img className='weekly-post-dp' src={saireen} alt="" /></Link>
                        <div className="weekly-post-username">
                            <Link style={{textDecoration:'none', color:`${props.darkmode?"#fff":'#000'}`,fontWeight:'600'}} to='/profile'>Saireen Ahmad</Link>
                            <div className="weekly-post-belowname">
                                <p className='weekly-post-time-tag'>WeeklyWinner,&nbsp;</p>
                                <p className='weekly-post-time-tag'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="weekly-post-right">
                        <button className='weekly-button-save'>Save</button>
                        <button className='weekly-button-save weekly-button-download'>Download</button>
                    </div>
            </div>
            <Link to='/post' className={`weekly-post-caption ${props.darkmode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>Everything is Temporary But Tax is Permanent.</p></Link>

                <div className={`weekly-mainpost ${props.darkmode?"changeModelite":""}`}>
                    <img className='weekly-mainpost-image' src={cat} alt="" />
                </div>
                <div className="weekly-mainpost-below">
                        <div className="weekly-mainpost-below-left">
                            <div className="weekly-mainpost-button-flex-parent">
                                <button> <ArrowUpwardIcon /> 1.5k</button>
                                <button><ArrowDownwardIcon />40</button>
                                <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                            </div>
                        </div>
                        <div className="weekly-mainpost-below-right">
                            <button className='weekly-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                            <button className='weekly-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                            <button className='weekly-mainpost-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                        </div>
                </div>
        </div>

        <div className="weekly-upper3">
            <div className="weekly-post1">
                <div className="weekly-post-left">
                        <Link to='/profile'><img className='weekly-post-dp' src={saireen} alt="" /></Link>
                        <div className="weekly-post-username">
                            <Link style={{textDecoration:'none', color:`${props.darkmode?"#fff":'#000'}`,fontWeight:'600'}} to='/profile'>Saireen Ahmad</Link>
                            <div className="weekly-post-belowname">
                                <p className='weekly-post-time-tag'>WeeklyWinner,&nbsp;</p>
                                <p className='weekly-post-time-tag'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="weekly-post-right">
                        <button className='weekly-button-save'>Save</button>
                        <button className='weekly-button-save weekly-button-download'>Download</button>
                    </div>
            </div>
            <Link to='/post' className={`weekly-post-caption ${props.darkmode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>Everything is Temporary But Tax is Permanent.</p></Link>

                <div className={`weekly-mainpost ${props.darkmode?"changeModelite":""}`}>
                    <img className='weekly-mainpost-image' src={cat} alt="" />
                </div>
                <div className="weekly-mainpost-below">
                        <div className="weekly-mainpost-below-left">
                            <div className="weekly-mainpost-button-flex-parent">
                                <button> <ArrowUpwardIcon /> 1.5k</button>
                                <button><ArrowDownwardIcon />40</button>
                                <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                            </div>
                        </div>
                        <div className="weekly-mainpost-below-right">
                            <button className='weekly-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                            <button className='weekly-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                            <button className='weekly-mainpost-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                        </div>
                </div>
        </div>

        <div className="weekly-upper3">
            <div className="weekly-post1">
                <div className="weekly-post-left">
                        <Link to='/profile'><img className='weekly-post-dp' src={saireen} alt="" /></Link>
                        <div className="weekly-post-username">
                            <Link style={{textDecoration:'none', color:`${props.darkmode?"#fff":'#000'}`,fontWeight:'600'}} to='/profile'>Saireen Ahmad</Link>
                            <div className="weekly-post-belowname">
                                <p className='weekly-post-time-tag'>WeeklyWinner,&nbsp;</p>
                                <p className='weekly-post-time-tag'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="weekly-post-right">
                        <button className='weekly-button-save'>Save</button>
                        <button className='weekly-button-save weekly-button-download'>Download</button>
                    </div>
            </div>
            <Link to='/post' className={`weekly-post-caption ${props.darkmode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>Everything is Temporary But Tax is Permanent.</p></Link>

                <div className={`weekly-mainpost ${props.darkmode?"changeModelite":""}`}>
                    <img className='weekly-mainpost-image' src={cat} alt="" />
                </div>
                <div className="weekly-mainpost-below">
                        <div className="weekly-mainpost-below-left">
                            <div className="weekly-mainpost-button-flex-parent">
                                <button> <ArrowUpwardIcon /> 1.5k</button>
                                <button><ArrowDownwardIcon />40</button>
                                <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                            </div>
                        </div>
                        <div className="weekly-mainpost-below-right">
                            <button className='weekly-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                            <button className='weekly-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                            <button className='weekly-mainpost-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                        </div>
                </div>
        </div>

        <div className="weekly-upper3">
            <div className="weekly-post1">
                <div className="weekly-post-left">
                        <Link to='/profile'><img className='weekly-post-dp' src={saireen} alt="" /></Link>
                        <div className="weekly-post-username">
                            <Link style={{textDecoration:'none', color:`${props.darkmode?"#fff":'#000'}`,fontWeight:'600'}} to='/profile'>Saireen Ahmad</Link>
                            <div className="weekly-post-belowname">
                                <p className='weekly-post-time-tag'>WeeklyWinner,&nbsp;</p>
                                <p className='weekly-post-time-tag'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="weekly-post-right">
                        <button className='weekly-button-save'>Save</button>
                        <button className='weekly-button-save weekly-button-download'>Download</button>
                    </div>
            </div>
            <Link to='/post' className={`weekly-post-caption ${props.darkmode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>Everything is Temporary But Tax is Permanent.</p></Link>

                <div className={`weekly-mainpost ${props.darkmode?"changeModelite":""}`}>
                    <img className='weekly-mainpost-image' src={cat} alt="" />
                </div>
                <div className="weekly-mainpost-below">
                        <div className="weekly-mainpost-below-left">
                            <div className="weekly-mainpost-button-flex-parent">
                                <button> <ArrowUpwardIcon /> 1.5k</button>
                                <button><ArrowDownwardIcon />40</button>
                                <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                            </div>
                        </div>
                        <div className="weekly-mainpost-below-right">
                            <button className='weekly-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                            <button className='weekly-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                            <button className='weekly-mainpost-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                        </div>
                </div>
        </div>

        <div className="weekly-upper3">
            <div className="weekly-post1">
                <div className="weekly-post-left">
                        <Link to='/profile'><img className='weekly-post-dp' src={saireen} alt="" /></Link>
                        <div className="weekly-post-username">
                            <Link style={{textDecoration:'none', color:`${props.darkmode?"#fff":'#000'}`,fontWeight:'600'}} to='/profile'>Saireen Ahmad</Link>
                            <div className="weekly-post-belowname">
                                <p className='weekly-post-time-tag'>WeeklyWinner,&nbsp;</p>
                                <p className='weekly-post-time-tag'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="weekly-post-right">
                        <button className='weekly-button-save'>Save</button>
                        <button className='weekly-button-save weekly-button-download'>Download</button>
                    </div>
            </div>
            <Link to='/post' className={`weekly-post-caption ${props.darkmode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>Everything is Temporary But Tax is Permanent.</p></Link>

                <div className={`weekly-mainpost ${props.darkmode?"changeModelite":""}`}>
                    <img className='weekly-mainpost-image' src={cat} alt="" />
                </div>
                <div className="weekly-mainpost-below">
                        <div className="weekly-mainpost-below-left">
                            <div className="weekly-mainpost-button-flex-parent">
                                <button> <ArrowUpwardIcon /> 1.5k</button>
                                <button><ArrowDownwardIcon />40</button>
                                <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                            </div>
                        </div>
                        <div className="weekly-mainpost-below-right">
                            <button className='weekly-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                            <button className='weekly-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                            <button className='weekly-mainpost-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                        </div>
                </div>
        </div>
         

        </div>



    </div>
  )
      }