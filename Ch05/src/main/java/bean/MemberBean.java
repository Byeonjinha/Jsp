package bean;

public class MemberBean {
	
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getHp() {
		return hp;
	}
	public void setHp(String hp) {
		this.hp = hp;
	}
	public String getPos() {
		return pos;
	}
	public void setPos(String pos) {
		this.pos = pos;
	}
	public int getDep() {
		return dep;
	}
	public void setDep(int dep) {
		this.dep = dep;
	}
	public String getRdate() {
		return Rdate;
	}
	public void setRdate(String rdate) {
		Rdate = rdate;
	}
	private String uid;
	private String name;
	private String hp;
	private String pos;
	private int dep;
	private String Rdate;
}