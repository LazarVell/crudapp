var app = new function() {
    this.el=document.getElementById(`contacts`);
    this.contacts=[];
    this.contactsInfo=[];

    this.Create = function(){
        elName = document.getElementById(`add-name`)
        var task = elName.value;
        if(task){
            this.contactsInfo.push(` Name: ` + task.trim()+` `);
        }
       elAddress = document.getElementById(`add-address`)
        var task = elAddress.value;
        if(task){
            this.contactsInfo.push(` Address: ` + task.trim()+` `);
        }
        elPhone = document.getElementById(`add-phone`)
        var task = elPhone.value;
        if(task){
            this.contactsInfo.push(` Phone: ` + task.trim()+` `);
        }
        elType = document.getElementById(`add-type`)
        var task = elType.value;
        if(task){
            this.contactsInfo.push(task.trim());

        }

        this.contacts.push(this.contactsInfo);
        this.contacts.join(" * ");
        elName.value='';
        elAddress.value='';
        elPhone.value='';
        elType.value='';
        this.Read();
        this.contactsInfo=[];
    };

    this.Read = function() {
        var data='';
        if (this.contacts.length>0){
            for(i=0; i<this.contacts.length; i++){
                data+=`<tr>`;
                data+=`<td>`+this.contacts[i]+`</td>`;
                data+=`<td><button onclick="app.Update(`+i+`)"
                class="btn btn-secondary">Edit</button></td>`;
                data+=`<td><button onclick="app.Delete(`+i+`)"
                class="btn btn-danger">Delete</button></td>`;
                data+= `</tr>`;
            }
        }
        this.Count(this.contacts.length);
        return this.el.innerHTML= data;
    };

    this.Update = function(item) {
        elName = document.getElementById(`edit-name`);
        elName.value = this.contacts[item];
        document.getElementById(`edit-form`).style.display=`block`;
        self=this;

        document.getElementById(`save-edit`).onsubmit= function () {
            var task1= elName.value;
            if(task1){
                self.contacts.splice(item, 1, task1.trim());
                self.Read();
                CloseInput();
            }   
        }
    };

    this.Delete = function(item) {
        this.contacts.splice(item,1);
        this.Read();
    };

    this.Count = function(data){

    };
}

app.Read();

function CloseInput() {
    document.getElementById('edit-form').style.display=`none`;
};