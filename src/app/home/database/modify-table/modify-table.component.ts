import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../../shared/rest-api.service';
import { environment } from '../../../../environments/environment';

declare let $:any;
declare let app:any;

@Component({
  selector: 'app-modify-table',
  templateUrl: './modify-table.component.html',
  styleUrls: ['./modify-table.component.scss']
})
export class ModifyTableComponent implements OnInit {

	free_databases = [];
	my_table_list = [];
	data_types = app.data_types;
	data_type_modifiers = app.data_type_modifiers;
	my_sql_indexes = app.my_sql_indexes;
	selTable = {};
	mi = 0;
	si = 0;

  constructor(private http: RestApiService,) { }

  ngOnInit() {
  	this.selTable['fields'] = [];
  	this.addNewField();
  	this.getDatabaseList();
  }

  getDatabaseList(){
  	// this.http.url = environment.baseUrl + "database_list";
  	// this.http.getObj().subscribe((data:any)=>{
  	// 	console.log(data);
  	// });
  	this.free_databases = app.free_databases;
  }

  onDatabaseSelect(dbname){
  	// this.http.url = environment.baseUrl + "table_list/" + dbname;
  	// this.http.getObj().subscribe((data:any)=>{
  	// 	console.log(data);
  	// });
  	this.my_table_list = app.my_table_list;
  	this.selTable['table_description'] = "";
  	this.selTable['keywords'] = "";
  }

  onTableSelect(table_name){
  	// this.http.url = environment.baseUrl + "table_list/" + dbname;
  	// this.http.getObj().subscribe((data:any)=>{
  	// 	console.log(data);
  	// });
  	this.selTable['table_description'] = "fj fjdfl jlfjd lfjdl fldjsfljd fldj jflsdjfl";
  	this.selTable['keywords'] = "jfjsdf, fjdsk, fkdskjfk, fjdskfjl, jiewriouewi, fdsjfjiew";
  }

  addNewField(){
  	this.selTable['fields'].push({}={});
  	this.selTable['fields'][this.selTable['fields'].length-1]['elequent_array'] = "visibles"
  	this.selTable['fields'][this.selTable['fields'].length-1]['data_type_modifier'] = {};
  	this.selTable['fields'][this.selTable['fields'].length-1]['my_sql_index'] = {};
  }

  removeField(i){
  	this.selTable['fields'].splice(i,1);
  }

  modifierInput(i){
  	const temp = this.selTable['fields'][i]['data_type_modifier']['name'];
  	this.mi = i;
  	if (temp === "comment" || temp === "default" || temp === "storedAs" || temp === "virtualAs" ){
  		$("#modifierInputModel").modal();
  	}
  	if (temp === "after" ){
  		$("#afterModifierInputModel").modal();
  	}
  }

  sqlIndexInput(i){
  	const temp = this.selTable['fields'][i]['my_sql_index']['name'];
  	this.si = i;
  	if (temp === "primary" || temp === "unique" ){
  		$("#sqlIndexInputModel").modal();
  	}
  }

  assert(field, value){
  	if(!value){alert(field + " is empty and is required."); throw new Error(field + " is empty and is required.");}
  }

  validateNewTable(){
  	this.assert('Table Name', this.selTable['table_name'])
  	this.assert('Database Name', this.selTable['database_name'])
  	for (let i = 0; i < this.selTable['fields'].length; i++) {
  		this.assert('Field Name' + String(i+1), this.selTable['fields'][i]['field_name']);
  		this.assert('Data Type' + String(i+1), this.selTable['fields'][i]['data_type']);
  	}
  }

  createNewTable(){
  	this.validateNewTable();
  	// this.http.url = environment.baseUrl + "newtable";
  	// this.http.addObj(this.selTable).subscribe((data:any)=>{
  	// 	console.log(data);
  	// });
  }

}
