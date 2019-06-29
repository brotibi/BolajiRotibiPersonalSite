import React, {Component} from 'react';
import '../App.css';
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



function Resume() {

    return (
        <div className='Resume'>
            {console.log(__dirname)}
            <Document file = "MobolajiRotibiResume2019.pdf"
            onLoadError={console.error}>
                            <Page pageNumber={1} width = '1000' />
            </Document>
        </div>
    );
};

/*
class Showcase extends Component {
    state = {
      numPages: null,
      pageNumber: 1,
    }
   
    onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
    }
   
    render() {

      const { pageNumber, numPages } = this.state;
   
      return (
        <div>
        <h1>Why</h1>
          <Document
            file="https://www.eecs.umich.edu/eecs/undergraduate/ugce/CE_Program_Guide.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={1} />
          </Document>
          <p>Page {pageNumber} of {numPages}</p>
        </div>
      );
    }
  }
  */

export default Resume;
