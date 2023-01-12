package beans;

import data.Dot;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;

import java.io.Serializable;
import java.util.concurrent.CopyOnWriteArrayList;

@Named("listBean")
@ApplicationScoped
public class ListBean implements Serializable {
    private CopyOnWriteArrayList<Dot> list = new CopyOnWriteArrayList<Dot>();

    public ListBean(){ }

    public void clearList(){
        list.clear();
    }

    public void addToList(Dot dot){
        list.add(dot);
    }

    public void setList(CopyOnWriteArrayList<Dot> list) {
        this.list = list;
    }

    public CopyOnWriteArrayList<Dot> getList() {
        return list;
    }
}
