import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';


interface ProjNode {
  name: string;
  children?: ProjNode[];
	content?: string;
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
	content: string;
}

const TREE_DATA: ProjNode[] = [
  {
    name: 'Business Model',
    children: [
      {
				name: 'Business Model Canvas',
				content: 'THIS IS MADNESS'
			},
			{
				name: 'Business Model',
				content: 'THIS IS MADNESS'
			},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussel sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

	private _transformer = (node: ProjNode, level: number) => {
    return {
      expandable: ((!!node.children && node.children.length > 0) || !!node.content),
      name: node.name,
			content: node.content,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
	}

	hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit() {
  }

}
