import base64
from github import Github
from github import InputGitTreeElement
import bs4

user = "CedYF"
password = "dijonsausage2"


from datetime import datetime, timedelta


def pushgit():
	g = Github(user,password)
	repo = g.get_user().get_repo('TheSeed')
	file_list = [
	    'C:\\Users\cedric.yarish\Downloads\\static\\TheSeed\\top-offers2.html',
	]
	file_names = [
	    'top-offers.html',
	]
	commit_message = 'HTML UPDATE'
	master_ref = repo.get_git_ref('heads/master')
	master_sha = master_ref.object.sha
	base_tree = repo.get_git_tree(master_sha)
	element_list = list()
	for i, entry in enumerate(file_list):
	    with open(entry) as input_file:
	        data = input_file.read()
	    if entry.endswith('.png'):
	        data = base64.b64encode(data)
	    element = InputGitTreeElement(file_names[i], '100644', 'blob', data)
	    element_list.append(element)

	tree = repo.create_git_tree(element_list, base_tree)
	parent = repo.get_git_commit(master_sha)
	commit = repo.create_git_commit(commit_message, tree, [parent])
	master_ref.edit(commit.sha)
	print("done")

 
def changeStaticHTML():
	print("changing STATIC HTML")
	with open("C:\\Users\cedric.yarish\Downloads\\static\\TheSeed\\top-offers2.html") as inf:
	    txt = inf.read()
	    soup = bs4.BeautifulSoup(txt,"lxml")

	for elem in soup.findAll(['script', 'style']):
		print("C")
		style = elem.extract()
		#print(style)
		style.decompose()
		head = soup.head
		head.append(soup.new_tag('style', type='text/css'))
		new_style = "#hearing,.hearing{display:block;}#laser,.laser{display:block;}#windows,.windows{display:block;}#security,.security{display:none!important;}#solar,.solar{display:none!important;}#wills,.wills{display:block;}#surveys,.surveys{display:none;}#equity,.equity{display:block;}#conservatory,.conservatory{display:block;}#wix,.wix{display:none;}#tubs,.tubs{display:block;}#mortages,.mortgages{display:none;}"
		head.style.append(new_style)
		 
		# save the file again
		with open("C:\\Users\cedric.yarish\Downloads\\static\\TheSeed\\top-offers2.html", "w") as outf:
		    outf.write(str(soup))
	
		break
	pushgit()
		

changeStaticHTML()


