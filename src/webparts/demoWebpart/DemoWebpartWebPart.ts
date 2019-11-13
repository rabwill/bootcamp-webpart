import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import * as lib from 'bootcamp-library-component';
import * as strings from 'DemoWebpartWebPartStrings';
import DemoWebpart from './components/DemoWebpart';
import { IDemoWebpartProps } from './components/IDemoWebpartProps';

export interface IDemoWebpartWebPartProps {
  description: string;
}

export default class DemoWebpartWebPart extends BaseClientSideWebPart<IDemoWebpartWebPartProps> {

  public async render(): Promise<void> {
    const librayInstance=new lib.NameDisplayLibraryLibrary();
    const libraryName=await librayInstance.DynamicallyLoadname();      
    const element: React.ReactElement<IDemoWebpartProps > = React.createElement(
      DemoWebpart,
      {
        libName:libraryName,
        devName:""
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
