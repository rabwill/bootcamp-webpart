import * as React from 'react';
import styles from './DemoWebpart.module.scss';
import { IDemoWebpartProps } from './IDemoWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';
export default class DemoWebpart extends React.Component<IDemoWebpartProps, {}> {
  

  public render(): React.ReactElement<IDemoWebpartProps> {
   
    return (
      <div className={ styles.demoWebpart }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint webpart using a library!</span>
              <p className={ styles.subTitle }>The name of my library is </p>
              <p className={ styles.description }>{escape(this.props.libName)}</p>
              <p className={ styles.subTitle }>The name of the developer is </p>
              <p className={ styles.description }>{escape(this.props.devName)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
