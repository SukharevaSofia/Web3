package beans;

import jakarta.annotation.PostConstruct;
import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Inject;
import jakarta.inject.Named;
import jakarta.persistence.*;
import data.Dot;
import java.io.Serializable;
import java.util.Collections;
import java.util.concurrent.CopyOnWriteArrayList;

@Named("dataBean")
@SessionScoped
public class DataBean implements Serializable {
    private final String persistenceUnit = "Web";
    private EntityManagerFactory entityManagerFactory;
    private EntityManager entityManager;
    private EntityTransaction transaction;
    private Dot dot = new Dot();
    private CopyOnWriteArrayList<Dot> dots;
    @Inject
    private ListBean listBean;

    public DataBean(){ }

    @PostConstruct
    private void init(){
        connection();
        dots = listBean.getList();
    }


    private void connection(){
        entityManagerFactory = Persistence.createEntityManagerFactory(persistenceUnit);
        entityManager = entityManagerFactory.createEntityManager();
        transaction = entityManager.getTransaction();
    }
    public void addData(){
        try{
            transaction.begin();
            dot.setMatch(checkMatch(dot.getX(), dot.getY(), dot.getR()));
            dot.setExecuteTime((System.nanoTime() - dot.getExecuteTime())/1000000);
            entityManager.persist(dot);
            listBean.addToList(dot);
            dot = new Dot();
            transaction.commit();
        } catch (NullPointerException e){
            System.out.println("Ошибка получения данных");
        } catch (RuntimeException e){
            if (transaction.isActive()) {
                transaction.rollback();
            }
            System.out.println("Ошибка получения данных");
        }
    }

    private Boolean checkMatch(final double x, final double y, final double R) {
        if((Math.abs(x) <= R)&&(Math.abs(y) <= R)){
            if((x > 0)&&(y > 0)){
                return false;
            }else if ((x <= 0)&&(y>0)){
                return ((x*x + y*y) <= (R*R));
            } else if ((x <= 0)&&(y<=0)) {
                return ((x + y) >= (-R));
            } else return (x > 0) && (y <= 0);
        }
        return false;
    }

    public Dot getDot(){
        return dot;
    }

    public void setDot(Dot dot) {
        this.dot = dot;
    }

    public CopyOnWriteArrayList<Dot> getDots() {
         Collections.reverse(dots);
         return dots;
    }

    public void setDots(CopyOnWriteArrayList<Dot> dots) {
        this.dots = dots;
    }
}
