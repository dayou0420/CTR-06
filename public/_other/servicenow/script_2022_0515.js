var target_table = "cmdb_ci_ip_firewall";
var field_list = ["Name", "Serial number", "Vendor", "Manufacturer", "Firmware manufacturer", "Firmware version", "Ports", "IP Address", "Location", "Status", "Category", "Owned by", "Managed by", "Managed By Group", "Support group", "Comments", "Model ID", "Model number", "Default Gateway"];
var column_list = ["column_label", "element", "internal_type", "reference", "default_value"];

column_info_list = [];
for (var i=0; i<field_list.length;i++) {              // 取得するフィールド毎に処理する
  var gr_fields = new GlideRecord("sys_dictionary");  // ServiceNowのシステム辞書を検索する
  gr_fields.addQuery("name", target_table);           // 上で指定したテーブルをクエリーする
  gr_fields.addQuery("column_label", field_list[i]);  // 取得するフィールドをクエリーする
  gr_fields.addEncodedQuery('internal_type!=collection^ORinternal_type=NULL');//To ignore all the table dictionaries(optional)
  gr_fields.query();                                  // クエリーを実行

  while(gr_fields.next()) {                           // クエリーの結果を処理する。クエリー結果をDictionaryに変換する
    column_value_dict = {};
    for (var j=0; j<column_list.length; j++) {         // 取得したフィールド情報を処理する
      column_value_dict[column_list[j]] = gr_fields.getValue(column_list[j]);
    }
    column_info_list.push(column_value_dict);          // Dictionaryを結果リストに追加する
  }
}

csv_str = "\n";
for (var k=0; k<field_list.length; k++) {             // 結果を表示する
  csv_str += Object.keys(column_info_list[k]).map(function(m){  // csvに変換する
    return column_info_list[k][m];
  }).join(',') + "\n";
}
gs.info(csv_str);